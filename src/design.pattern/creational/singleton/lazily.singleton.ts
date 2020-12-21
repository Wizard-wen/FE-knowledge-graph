/**
 * @author wizard
 * @date 2020/12/21
 */

export class LazilySingleton {
  private static instance = new LazilySingleton();

  public static getInstance() {
    return LazilySingleton.instance;
  }
}
