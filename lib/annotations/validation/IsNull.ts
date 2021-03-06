import 'reflect-metadata';
import {addAttributeOptions} from "../../services/models";

/**
 * Only allows null
 */
export function IsNull(target: any, propertyName: string): void {

  addAttributeOptions(target, propertyName, {
    validate: {
      isNull: true
    }
  });
}
