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
      if (field.name.includes('_')) label = field.name.split('_').join(' ');
      if (field.name.includes('-')) label = label.split('-').join(' ');
      label = label[0].toUpperCase() + label.slice(1);
    }
    // console.log('label', label);
    return label;
  }

  static ensureID(field: iField): string {
    let id: string = '';
    if (field.id) {
      id = `field_${field.type}_${field.id}`;
    } else if (field.name) {
      id = `field_${field.type}_`;
      id += field.name.split(' ').join('_');
      id = id.toLowerCase();
    }
    // console.log('id', id);
    return id;
  }

}

