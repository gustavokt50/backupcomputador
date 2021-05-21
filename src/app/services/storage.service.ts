import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
export interface Item{

  id: number;
  theme : boolean;
  title: string;
  value: string;
}

const ITEMS_KEY = 'my-items';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) { }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  async get(key: string): Promise<any> {
    const item = await this.storage.get(key);
    return JSON.parse(item.value);
  }
  async remove(key: string): Promise<void> {
    await this.storage.remove(key);
  }
  addItem(item:Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items:Item[]) => {
      if(items){
        items.push(item)
        return this.storage.set(ITEMS_KEY,items);
      }else{
        return this.storage.set(ITEMS_KEY,[item]);
      }
    });
  }
  getItems(): Promise<Item[]>{
    return this.storage.get(ITEMS_KEY)
  }
  updateItem(item:Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items:Item[]) => {
      if(!items || items.length === 0){
        return null
      }
      let newItems: Item[] =[]; 
      for (let i of items){
        if(i.id === item.id){
          newItems.push(item)

        }else{
          newItems.push(i);

        }
          return this.storage.set(ITEMS_KEY, newItems);
      }
    });

  }

  deleteItem(id:number): Promise<Item>{
    return this.storage.get(ITEMS_KEY).then((items:Item[]) => {
      if(!items || items.length === 0){
        return null
      }
      let toKeep: Item[] = [];
      for(let i of items){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY,toKeep);
    });
  }
}

