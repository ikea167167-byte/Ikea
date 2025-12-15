import { Book, BookCategory, AgeGroup } from './types';

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: '神奇的种子',
    author: '田中直树',
    category: BookCategory.SCIENCE,
    ageGroup: AgeGroup.KINDER,
    coverColor: '#4CAF50',
    description: '一颗小种子是如何变成参天大树的？探索生命的奥秘。',
    publishDate: '2023-01-15',
    isbn: '978-7-111-00001-2',
    isRecommended: true
  },
  {
    id: '2',
    title: '月亮的味道',
    author: '迈克尔·格雷涅茨',
    category: BookCategory.PICTURE_BOOK,
    ageGroup: AgeGroup.TODDLER,
    coverColor: '#3F51B5',
    description: '月亮是什么味道的呢？小动物们搭起人梯想要尝一口。',
    publishDate: '2022-11-20',
    isbn: '978-7-111-00002-9',
    isRecommended: true
  },
  {
    id: '3',
    title: '魔法色彩实验室',
    author: 'Hervé Tullet',
    category: BookCategory.ART,
    ageGroup: AgeGroup.PRESCHOOL,
    coverColor: '#FFC107',
    description: '动动手指，颜色就会发生神奇的变化！互动性极强的艺术启蒙书。',
    publishDate: '2023-03-10',
    isbn: '978-7-111-00003-6'
  },
  {
    id: '4',
    title: '情绪小怪兽',
    author: '安娜·耶纳斯',
    category: BookCategory.EMOTION,
    ageGroup: AgeGroup.KINDER,
    coverColor: '#E91E63',
    description: '把快乐、忧伤、愤怒、害怕和平静分开，学会管理情绪。',
    publishDate: '2022-09-05',
    isbn: '978-7-111-00004-3',
    isRecommended: true
  },
  {
    id: '5',
    title: '霍格沃茨的秘密',
    author: 'J.K. Rowling (Adaptation)',
    category: BookCategory.MAGIC,
    ageGroup: AgeGroup.PRESCHOOL,
    coverColor: '#673AB7',
    description: '专为儿童改编的魔法世界导览，探索城堡的秘密角落。',
    publishDate: '2023-05-01',
    isbn: '978-7-111-00005-0'
  },
  {
    id: '6',
    title: '谁咬了我的大饼',
    author: '木村裕一',
    category: BookCategory.PICTURE_BOOK,
    ageGroup: AgeGroup.TODDLER,
    coverColor: '#795548',
    description: '小猪的大饼被咬了一口，凶手到底是谁呢？',
    publishDate: '2022-12-12',
    isbn: '978-7-111-00006-7'
  },
  {
    id: '7',
    title: '星际迷航：小小宇航员',
    author: '李小龙',
    category: BookCategory.SCIENCE,
    ageGroup: AgeGroup.PRESCHOOL,
    coverColor: '#2196F3',
    description: '太阳系有哪些行星？黑洞是什么？小小宇航员出发啦！',
    publishDate: '2023-02-28',
    isbn: '978-7-111-00007-4'
  },
  {
    id: '8',
    title: '点',
    author: '彼得·雷诺兹',
    category: BookCategory.ART,
    ageGroup: AgeGroup.KINDER,
    coverColor: '#FF5722',
    description: '就在纸上点一个点。一个鼓励孩子勇敢表达自我的故事。',
    publishDate: '2023-04-15',
    isbn: '978-7-111-00008-1'
  }
];