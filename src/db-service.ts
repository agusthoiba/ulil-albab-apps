import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';
import { useContext } from 'react';
import { logger } from 'react-native-logs';
const log = logger.createLogger();

const tableNameSurah = 'table_surah';
const tableNameAyat = 'table_ayat';

import {Surah, Ayat, Juz, Company} from './models/Quran';
import { LogContext } from './Contexts';


export const openDatabase = async(): Promise<SQLite.SQLiteDatabase>  => {
  return SQLite.openDatabase(`alquranq-sqlite3.db`);
}

export const getQuranSurah = async (): Promise<Surah[]> => {
  log.info(`before load db`);
  
  log.debug('fs: ', FileSystem.documentDirectory)
  const db = await openDatabase();
    log.info("after load db");
    log.debug(db)


    const items: Surah[] = [];

    const readOnly = true;
    const bla = await db.transactionAsync(async tx => {
      log.debug(tx);
      const results = await tx.executeSqlAsync(`SELECT * FROM table_surah;`);

      results.rows.forEach(result => {
        log.debug('result -', result)
        // log.debug(result.ID, result.NAME)

        const item: Surah = {
          Surah: result.Surah,
          Ayat: result.Ayat,
          Terjemahan: result.Terjemahan,
          Jumlah_Ayat: result.Jumlah_Ayat,
          Ayat_Arab: result.Ayat_Arab
        }

        // log.debug('item', item)
        
        items.push(item)
      });

      // log.debug('items in dbservice in --', JSON.stringify(items))

    }, readOnly);
    
    return items;
 
};

export const getQuranAyat = async (Surah: string): Promise<Ayat[]> => {
  const db = await openDatabase();
  const items: Ayat[] = [];

  const readOnly = true;
  const bla = await db.transactionAsync(async tx => {
    log.debug(tx);
    const results = await tx.executeSqlAsync(`SELECT * FROM ${tableNameAyat} WHERE Surah=${Surah};`);

      results.rows.forEach(result => {
        log.debug('result -', result)
        // log.debug(result.ID, result.NAME)

        const item: Ayat = {
          Surah: result.Surah,
          Ayat: result.Ayat,
          Arab: result.Arab,
          Terjemahan: result.Terjemahan
        }

        // log.debug('item', item)
        
        items.push(item)
      });

      log.debug('items ayat in dbservice in --', JSON.stringify(items))

    }, readOnly);
    
    return items;
 
};

