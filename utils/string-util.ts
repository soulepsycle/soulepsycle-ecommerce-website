export function convertToKebabCase(str: string) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }
  
  export function convertToNormalCase(str: string) {
    return str
      .replace(/-/g, ' ')
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());
  }
  