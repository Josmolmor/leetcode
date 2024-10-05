class ListItem<T> {
    val: T;
    nextItem: ListItem<T> | null;

    constructor(val: T) {
        this.val = val;
        this.nextItem = null;
    }
}

// @ts-ignore
export default class CustomList<T> {
    firstItem: ListItem<T> | null;

    constructor() {
        this.firstItem = null;
    }

    // Add a new item at the end
    addToEnd(val: T): void {
        const newItem = new ListItem(val);

        if (!this.firstItem) {
            this.firstItem = newItem;
        } else {
            let temp = this.firstItem;
            while (temp.nextItem) {
                temp = temp.nextItem;
            }
            temp.nextItem = newItem;
        }
    }

    // Remove the first matching value
    removeByValue(val: T): void {
        if (!this.firstItem) return;

        // Special case if the first item matches
        if (this.firstItem.val === val) {
            this.firstItem = this.firstItem.nextItem;
            return;
        }

        let temp = this.firstItem;
        let prev: ListItem<T> | null = null;

        // Traverse and find the item to remove
        while (temp && temp.val !== val) {
            prev = temp;
            if (!temp.nextItem) return;
            temp = temp.nextItem;
        }

        if (temp) {
            prev!.nextItem = temp.nextItem;
        }
    }

    // Search for an item
    find(val: T): boolean {
        let temp = this.firstItem;

        while (temp) {
            if (temp.val === val) {
                return true;
            }
            temp = temp.nextItem;
        }

        return false;
    }
}
