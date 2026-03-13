import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Direcsa API',
            version: '1.0.0',
            description:
                'API REST de Direcsa — catálogo de productos, cotizaciones, autenticación y panel de administración.',
            contact: {
                name: 'Direcsa',
            },
        },
        servers: [
            {
                url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
                description: 'Servidor de desarrollo',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
                cookieAuth: {
                    type: 'apiKey',
                    in: 'cookie',
                    name: 'token',
                },
            },
            schemas: {
                Error: {
                    type: 'object',
                    properties: {
                        error: { type: 'string', example: 'Mensaje de error' },
                    },
                },
                Product: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        description: { type: 'string', nullable: true },
                        sku: { type: 'string' },
                        unit: { type: 'string', default: 'pza' },
                        imageOriginal: { type: 'string', nullable: true },
                        imageOptimized: { type: 'string', nullable: true },
                        imageThumbnail: { type: 'string', nullable: true },
                        dealerPriceUsd: { type: 'number' },
                        promoPriceUsd: { type: 'number' },
                        priceMxnExVat: { type: 'number' },
                        priceMxnIncVat: { type: 'number' },
                        priceMxn: { type: 'number' },
                        priceUsd: { type: 'number' },
                        discount: { type: 'number' },
                        brandId: { type: 'string' },
                        categoryId: { type: 'string' },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                    },
                },
                ProductInput: {
                    type: 'object',
                    required: ['name', 'sku', 'brandId', 'categoryId'],
                    properties: {
                        name: { type: 'string', minLength: 2 },
                        description: { type: 'string', nullable: true },
                        sku: { type: 'string' },
                        unit: { type: 'string' },
                        dealerPriceUsd: { type: 'number' },
                        promoPriceUsd: { type: 'number' },
                        priceMxnExVat: { type: 'number' },
                        priceMxnIncVat: { type: 'number' },
                        priceMxn: { type: 'number' },
                        priceUsd: { type: 'number' },
                        discount: { type: 'number' },
                        brandId: { type: 'string' },
                        categoryId: { type: 'string' },
                        isActive: { type: 'boolean' },
                        imageOriginal: { type: 'string', nullable: true },
                        imageOptimized: { type: 'string', nullable: true },
                        imageThumbnail: { type: 'string', nullable: true },
                    },
                },
                Brand: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        logoOriginal: { type: 'string', nullable: true },
                        logoOptimized: { type: 'string', nullable: true },
                        logoThumbnail: { type: 'string', nullable: true },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                    },
                },
                BrandInput: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                        name: { type: 'string' },
                        isActive: { type: 'boolean' },
                        logoOriginal: { type: 'string', nullable: true },
                        logoOptimized: { type: 'string', nullable: true },
                        logoThumbnail: { type: 'string', nullable: true },
                    },
                },
                Category: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        parentId: { type: 'string', nullable: true },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                    },
                },
                CategoryInput: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                        name: { type: 'string' },
                        parentId: { type: 'string', nullable: true },
                        isActive: { type: 'boolean' },
                    },
                },
                Quote: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        status: { type: 'string', enum: ['PENDING', 'REVIEWED', 'APPROVED', 'REJECTED'] },
                        notes: { type: 'string', nullable: true },
                        total: { type: 'number' },
                        userId: { type: 'string' },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        items: {
                            type: 'array',
                            items: { $ref: '#/components/schemas/QuoteItem' },
                        },
                    },
                },
                QuoteItem: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        quantity: { type: 'integer' },
                        unitPrice: { type: 'number' },
                        subtotal: { type: 'number' },
                        productId: { type: 'string' },
                    },
                },
                QuoteInput: {
                    type: 'object',
                    required: ['items'],
                    properties: {
                        notes: { type: 'string' },
                        items: {
                            type: 'array',
                            minItems: 1,
                            items: {
                                type: 'object',
                                required: ['productId', 'quantity', 'unitPrice'],
                                properties: {
                                    productId: { type: 'string' },
                                    quantity: { type: 'integer', minimum: 1 },
                                    unitPrice: { type: 'number', minimum: 0 },
                                },
                            },
                        },
                    },
                },
                ContactMessage: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        email: { type: 'string' },
                        phone: { type: 'string', nullable: true },
                        description: { type: 'string' },
                        isRead: { type: 'boolean' },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                    },
                },
                ContactInput: {
                    type: 'object',
                    required: ['name', 'email', 'description'],
                    properties: {
                        name: { type: 'string', minLength: 2 },
                        email: { type: 'string', format: 'email' },
                        phone: { type: 'string' },
                        description: { type: 'string' },
                    },
                },
                AuthUser: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        email: { type: 'string' },
                        userType: { type: 'string', enum: ['ADMIN', 'BUYER'] },
                    },
                },
                AdminInput: {
                    type: 'object',
                    required: ['name', 'email', 'password'],
                    properties: {
                        name: { type: 'string', minLength: 2 },
                        email: { type: 'string', format: 'email' },
                        password: { type: 'string', minLength: 6 },
                    },
                },
                UploadUrlInput: {
                    type: 'object',
                    required: ['filename', 'entity'],
                    properties: {
                        filename: { type: 'string' },
                        entity: { type: 'string', enum: ['product', 'brand'] },
                    },
                },
                UploadUrlResponse: {
                    type: 'object',
                    properties: {
                        uploadUrl: { type: 'string', description: 'Pre-signed S3 URL for upload' },
                        originalUrl: { type: 'string' },
                        optimizedUrl: { type: 'string' },
                        thumbnailUrl: { type: 'string' },
                    },
                },
            },
        },
        tags: [
            { name: 'Auth', description: 'Autenticación y sesiones' },
            { name: 'Products', description: 'Catálogo de productos (público)' },
            { name: 'Brands', description: 'Marcas (público)' },
            { name: 'Categories', description: 'Categorías (público)' },
            { name: 'Contacto', description: 'Formulario de contacto' },
            { name: 'Quotes', description: 'Cotizaciones (autenticado)' },
            { name: 'Admin - Products', description: 'Gestión de productos (admin)' },
            { name: 'Admin - Brands', description: 'Gestión de marcas (admin)' },
            { name: 'Admin - Categories', description: 'Gestión de categorías (admin)' },
            { name: 'Admin - Contacts', description: 'Gestión de mensajes de contacto (admin)' },
            { name: 'Admin - Admins', description: 'Gestión de administradores (admin)' },
            { name: 'Uploads', description: 'Subida de archivos a S3 (admin)' },
        ],
    },
    apis: ['./app/api/**/route.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
