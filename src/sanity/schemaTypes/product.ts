export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name:'id',
        type:'number',
        title:'ID'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'originalPrice',
        title: 'Original Price',
        type: 'number',
      },
      {
        name: 'badge',
        title: 'Badge',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Text',
            type: 'string',
          },
          {
            name: 'color',
            title: 'Color',
            type: 'string',
          },
        ],
      },
    ],
  }
  
  