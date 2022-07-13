export interface IArrayList<T> {
    add(data: T): void;
    get(index:number);
    size():number;
    remove(data : T);
}