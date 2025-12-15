export enum BookCategory {
  PICTURE_BOOK = '绘本故事',
  SCIENCE = '自然科学',
  ART = '艺术启蒙',
  EMOTION = '情商培养',
  MAGIC = '魔法传说'
}

export enum AgeGroup {
  TODDLER = '3-4岁',
  KINDER = '4-5岁',
  PRESCHOOL = '5-6岁'
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  ageGroup: AgeGroup;
  coverColor: string;
  description: string;
  publishDate: string;
  isbn: string;
  isRecommended?: boolean;
}

export interface FilterState {
  search: string;
  category: BookCategory | 'ALL';
  age: AgeGroup | 'ALL';
}