import { Injectable } from '@angular/core';
import * as duckdb from '@duckdb/duckdb-wasm';

@Injectable({
  providedIn: 'root'
})
export class DuckDbService {
  private db!: duckdb.AsyncDuckDB;

  constructor() {
    this.init();
   }

   async getDb(): Promise<duckdb.AsyncDuckDB> {
    await this.init();
    return this.db;
  }

   private async init(): Promise<void> {
    await navigator.locks.request('duckdb_lock', async () => {
      const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();
      const bundle: duckdb.DuckDBBundle = await duckdb.selectBundle(
        JSDELIVR_BUNDLES
      );

      // Create a worker from the selected bundle
      const worker_url = URL.createObjectURL(
        new Blob([`importScripts("${bundle.mainWorker!}");`], {
          type: 'text/javascript',
        })
      );

      const worker = new Worker(worker_url);

      const logger = new duckdb.ConsoleLogger();
      this.db = new duckdb.AsyncDuckDB(logger, worker);
      await this.db.instantiate(bundle.mainModule, bundle.pthreadWorker);
      URL.revokeObjectURL(worker_url);
    });
  }
}
