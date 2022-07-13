import {IArrayList} from "./ArrayList";

export class ArrayList<T> implements IArrayList<T>{
    container: Array<T>;
    constructor() {
        this.container=[];
    }
    add(data: T){
        this.container.push(data);
    }

    get(index: number) {
        return this.container[index];
    }

    remove() {
        this.container.pop();
    }

    size(): number {
        return this.container.length;
    }

}