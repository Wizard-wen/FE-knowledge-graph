/**
 * @author wizard
 */

export class EarlySingleton {
  private static instance: EarlySingleton;

  public static getInstance() {
    if(!EarlySingleton.instance){
      EarlySingleton.instance = new EarlySingleton();
    }
    return EarlySingleton.instance;
  }
}
