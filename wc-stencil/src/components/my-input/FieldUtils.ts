import iField from './iField';


export default class FieldUtils {
  name: string;
  label: string;
  id: string;

  static ensureLabel(field: iField): string {
    let label: string = '';
    if (field.label) {
      label = field.label;
    } else if (field.name) {
      label = field.name.split('_').join(' ');
      label = label.split('-').join(' ');
      label = label[0].toUpperCase() + label.slice(1);
    }
    // console.log('label', label);
    return label;
  }

  static ensureID(field: iField, idAttr): string {
    let id: string = '';
    if (idAttr) {
      id = `field_${field.type}_${idAttr}`;
    } else if (field.name) {
      id = `field_${field.type}_`;
      id += field.name.split(' ').join('_');
      id = id.toLowerCase();
    }
    // console.log('id', id);
    return id;
  }

}

