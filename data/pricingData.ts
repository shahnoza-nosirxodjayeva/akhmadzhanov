export interface PricingPlan {
    id: number;
    type: string;
    title: string;
    features: string[];
    price: string;
    image: string;
  }
  
  export const pricingData: PricingPlan[] = [
    {
      id: 1,
      type: "Минимальный",
      title: "Минимальный",
      features: [
        "Разбор ваших проектов в Photoshop",
        "Видеоконференция для разбора ошибок",
        "Рекомендации по улучшению работы",
      ],
      price: "7 000 ₽",
      image: "/images/project-3/3.webp",
    },
    {
      id: 2,
      type: "Стандартный",
      title: "Стандартный",
      features: [
        "Ответы на вопросы по вашей сцене",
        "Комментарии к вашим рендерам",
        "Видеоконференция с объяснением действий",
      ],
      price: "16 000 ₽",
      image: "/images/project-3/1.webp",
    },
    {
      id: 3,
      type: "PRO",
      title: "PRO",
      features: [
        "Полный разбор вашей сцены",
        "Детальные комментарии к рендерам",
        "Новые советы и рекомендации",
        "Видеоконференция с разбором ошибок",
      ],
      price: "30 000 ₽",
      image: "/images/project-3/2.webp",
    },
  ];
  