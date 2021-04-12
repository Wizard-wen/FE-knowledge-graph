/**
 *
 */

export interface ITreeNode {
  data: number;
  left?: ITreeNode;
  right?: ITreeNode;

  setLeftTree(node: ITreeNode): void;

  setRightTree(node: ITreeNode): void;
}

export class TreeNode implements ITreeNode {
  leftTree?: ITreeNode;

  rightTree?: ITreeNode;

  constructor(private value: number) {
  }

  get left(): ITreeNode | undefined {
    return this.leftTree;
  }

  get right(): ITreeNode | undefined {
    return this.rightTree;
  }

  get data(): number {
    return this.value;
  }

  setLeftTree(node: ITreeNode): void {
    this.leftTree = node;
  }

  setRightTree(node: ITreeNode): void {
    this.rightTree = node;
  }
}

export function insertBST(item: number, tree?: ITreeNode) {
  const newTree = new TreeNode(item);
  if (!tree) {
    tree = newTree;
  }
  let q = tree;
  while (1) {
    if (item < q.data) {
      if (!q.left) {
        q.setLeftTree(newTree);
        break;
      } else {
        q = q.left;
      }
    } else if (!q.right) {
      q.setRightTree(newTree);
      break;
    } else {
      q = q.right;
    }
  }
}
