/**
 *
 */

export class tree<T extends { id: string, parentId?: string }> {
  constructor(private readonly originalList: T[]) {
  }

  generate(): T[] {
    const parentIdAndElementMap = this.generateParentIdAndElementMap();
    const topLevelList = this.generateTopLevelList();
    const result = this.generateMenuTree(parentIdAndElementMap, topLevelList);
    return result;
  }

  private generateMenuTree(
    parentIdAndElementMap: { [key: string]: T[] },
    responseList: T[]
  ): T[] {
    return responseList
      .map((item: T) => {
        if (parentIdAndElementMap[item.id]) {
          return {
            ...item,
            children: this.generateMenuTree(parentIdAndElementMap, parentIdAndElementMap[item.id])
          };
        }
        return item;
      });
  }

  private generateParentIdAndElementMap(): { [key: string]: T[] } {
    return this.originalList.reduce(
      (
        previousValue: { [key: string]: T[] },
        currentValue: T
      ) => {
        if (!currentValue.parentId) {
          return previousValue;
        }
        if (!previousValue[currentValue.parentId]) {
          previousValue[currentValue.parentId] = [];
        }
        previousValue[currentValue.parentId].push(currentValue);
        return previousValue;
      },
      {}
    );
  }

  private generateTopLevelList(): T[] {
    const topLevelList: T[] = [];
    this.originalList.forEach((item: T) => {
      if (!item.parentId || item.parentId === '') {
        topLevelList.push(item);
      }
    });
    return topLevelList;
  }
}
