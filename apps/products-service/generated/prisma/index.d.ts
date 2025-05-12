
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model ProductVideo
 * 
 */
export type ProductVideo = $Result.DefaultSelection<Prisma.$ProductVideoPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model CategoryHierarchy
 * 
 */
export type CategoryHierarchy = $Result.DefaultSelection<Prisma.$CategoryHierarchyPayload>
/**
 * Model ProductToCategory
 * 
 */
export type ProductToCategory = $Result.DefaultSelection<Prisma.$ProductToCategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVideo`: Exposes CRUD operations for the **ProductVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVideos
    * const productVideos = await prisma.productVideo.findMany()
    * ```
    */
  get productVideo(): Prisma.ProductVideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryHierarchy`: Exposes CRUD operations for the **CategoryHierarchy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryHierarchies
    * const categoryHierarchies = await prisma.categoryHierarchy.findMany()
    * ```
    */
  get categoryHierarchy(): Prisma.CategoryHierarchyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productToCategory`: Exposes CRUD operations for the **ProductToCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductToCategories
    * const productToCategories = await prisma.productToCategory.findMany()
    * ```
    */
  get productToCategory(): Prisma.ProductToCategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    ProductImage: 'ProductImage',
    ProductVideo: 'ProductVideo',
    Category: 'Category',
    CategoryHierarchy: 'CategoryHierarchy',
    ProductToCategory: 'ProductToCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "productImage" | "productVideo" | "category" | "categoryHierarchy" | "productToCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      ProductVideo: {
        payload: Prisma.$ProductVideoPayload<ExtArgs>
        fields: Prisma.ProductVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>
          }
          findFirst: {
            args: Prisma.ProductVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>
          }
          findMany: {
            args: Prisma.ProductVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>[]
          }
          create: {
            args: Prisma.ProductVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>
          }
          createMany: {
            args: Prisma.ProductVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>[]
          }
          delete: {
            args: Prisma.ProductVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>
          }
          update: {
            args: Prisma.ProductVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>
          }
          deleteMany: {
            args: Prisma.ProductVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>[]
          }
          upsert: {
            args: Prisma.ProductVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVideoPayload>
          }
          aggregate: {
            args: Prisma.ProductVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVideo>
          }
          groupBy: {
            args: Prisma.ProductVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVideoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVideoCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      CategoryHierarchy: {
        payload: Prisma.$CategoryHierarchyPayload<ExtArgs>
        fields: Prisma.CategoryHierarchyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryHierarchyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryHierarchyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>
          }
          findFirst: {
            args: Prisma.CategoryHierarchyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryHierarchyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>
          }
          findMany: {
            args: Prisma.CategoryHierarchyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>[]
          }
          create: {
            args: Prisma.CategoryHierarchyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>
          }
          createMany: {
            args: Prisma.CategoryHierarchyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryHierarchyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>[]
          }
          delete: {
            args: Prisma.CategoryHierarchyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>
          }
          update: {
            args: Prisma.CategoryHierarchyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>
          }
          deleteMany: {
            args: Prisma.CategoryHierarchyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryHierarchyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryHierarchyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>[]
          }
          upsert: {
            args: Prisma.CategoryHierarchyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHierarchyPayload>
          }
          aggregate: {
            args: Prisma.CategoryHierarchyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryHierarchy>
          }
          groupBy: {
            args: Prisma.CategoryHierarchyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryHierarchyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryHierarchyCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryHierarchyCountAggregateOutputType> | number
          }
        }
      }
      ProductToCategory: {
        payload: Prisma.$ProductToCategoryPayload<ExtArgs>
        fields: Prisma.ProductToCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductToCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductToCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductToCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductToCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductToCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductToCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductToCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductToCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>[]
          }
          delete: {
            args: Prisma.ProductToCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>
          }
          update: {
            args: Prisma.ProductToCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductToCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductToCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductToCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductToCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductToCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductToCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductToCategory>
          }
          groupBy: {
            args: Prisma.ProductToCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductToCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductToCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductToCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    productImage?: ProductImageOmit
    productVideo?: ProductVideoOmit
    category?: CategoryOmit
    categoryHierarchy?: CategoryHierarchyOmit
    productToCategory?: ProductToCategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ProductImage: number
    ProductVideo: number
    categories: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductImage?: boolean | ProductCountOutputTypeCountProductImageArgs
    ProductVideo?: boolean | ProductCountOutputTypeCountProductVideoArgs
    categories?: boolean | ProductCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVideoWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductToCategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    childCategories: number
    products: number
    ancestors: number
    descendants: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childCategories?: boolean | CategoryCountOutputTypeCountChildCategoriesArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
    ancestors?: boolean | CategoryCountOutputTypeCountAncestorsArgs
    descendants?: boolean | CategoryCountOutputTypeCountDescendantsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductToCategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAncestorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryHierarchyWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountDescendantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryHierarchyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    discount: number | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    discount: number | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    slug: string | null
    externalId: string | null
    name: string | null
    description: string | null
    price: number | null
    discount: number | null
    quantity: number | null
    richContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    slug: string | null
    externalId: string | null
    name: string | null
    description: string | null
    price: number | null
    discount: number | null
    quantity: number | null
    richContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    slug: number
    externalId: number
    name: number
    description: number
    price: number
    discount: number
    quantity: number
    keywords: number
    richContent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    discount?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    discount?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    slug?: true
    externalId?: true
    name?: true
    description?: true
    price?: true
    discount?: true
    quantity?: true
    richContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    slug?: true
    externalId?: true
    name?: true
    description?: true
    price?: true
    discount?: true
    quantity?: true
    richContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    slug?: true
    externalId?: true
    name?: true
    description?: true
    price?: true
    discount?: true
    quantity?: true
    keywords?: true
    richContent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    slug: string
    externalId: string | null
    name: string
    description: string
    price: number
    discount: number
    quantity: number
    keywords: string[]
    richContent: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    externalId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discount?: boolean
    quantity?: boolean
    keywords?: boolean
    richContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ProductImage?: boolean | Product$ProductImageArgs<ExtArgs>
    ProductVideo?: boolean | Product$ProductVideoArgs<ExtArgs>
    categories?: boolean | Product$categoriesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    externalId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discount?: boolean
    quantity?: boolean
    keywords?: boolean
    richContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    externalId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discount?: boolean
    quantity?: boolean
    keywords?: boolean
    richContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    slug?: boolean
    externalId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    discount?: boolean
    quantity?: boolean
    keywords?: boolean
    richContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"slug" | "externalId" | "name" | "description" | "price" | "discount" | "quantity" | "keywords" | "richContent" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductImage?: boolean | Product$ProductImageArgs<ExtArgs>
    ProductVideo?: boolean | Product$ProductVideoArgs<ExtArgs>
    categories?: boolean | Product$categoriesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      ProductImage: Prisma.$ProductImagePayload<ExtArgs>[]
      ProductVideo: Prisma.$ProductVideoPayload<ExtArgs>[]
      categories: Prisma.$ProductToCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      externalId: string | null
      name: string
      description: string
      price: number
      discount: number
      quantity: number
      keywords: string[]
      richContent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const productWithSlugOnly = await prisma.product.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `slug`
     * const productWithSlugOnly = await prisma.product.createManyAndReturn({
     *   select: { slug: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `slug`
     * const productWithSlugOnly = await prisma.product.updateManyAndReturn({
     *   select: { slug: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductImage<T extends Product$ProductImageArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductVideo<T extends Product$ProductVideoArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductVideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Product$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly slug: FieldRef<"Product", 'String'>
    readonly externalId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly discount: FieldRef<"Product", 'Int'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly keywords: FieldRef<"Product", 'String[]'>
    readonly richContent: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.ProductImage
   */
  export type Product$ProductImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.ProductVideo
   */
  export type Product$ProductVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    where?: ProductVideoWhereInput
    orderBy?: ProductVideoOrderByWithRelationInput | ProductVideoOrderByWithRelationInput[]
    cursor?: ProductVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVideoScalarFieldEnum | ProductVideoScalarFieldEnum[]
  }

  /**
   * Product.categories
   */
  export type Product$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    where?: ProductToCategoryWhereInput
    orderBy?: ProductToCategoryOrderByWithRelationInput | ProductToCategoryOrderByWithRelationInput[]
    cursor?: ProductToCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductToCategoryScalarFieldEnum | ProductToCategoryScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    order: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    order: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    blurhash: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    blurhash: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    blurhash: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    order?: true
  }

  export type ProductImageSumAggregateInputType = {
    order?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    blurhash?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    blurhash?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    blurhash?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: string
    productId: string
    url: string
    blurhash: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    blurhash?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    blurhash?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    blurhash?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    blurhash?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "url" | "blurhash" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      url: string
      blurhash: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImageUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'String'>
    readonly productId: FieldRef<"ProductImage", 'String'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly blurhash: FieldRef<"ProductImage", 'String'>
    readonly order: FieldRef<"ProductImage", 'Int'>
    readonly createdAt: FieldRef<"ProductImage", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage updateManyAndReturn
   */
  export type ProductImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model ProductVideo
   */

  export type AggregateProductVideo = {
    _count: ProductVideoCountAggregateOutputType | null
    _avg: ProductVideoAvgAggregateOutputType | null
    _sum: ProductVideoSumAggregateOutputType | null
    _min: ProductVideoMinAggregateOutputType | null
    _max: ProductVideoMaxAggregateOutputType | null
  }

  export type ProductVideoAvgAggregateOutputType = {
    order: number | null
  }

  export type ProductVideoSumAggregateOutputType = {
    order: number | null
  }

  export type ProductVideoMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    posterUrl: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVideoMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    posterUrl: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVideoCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    posterUrl: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVideoAvgAggregateInputType = {
    order?: true
  }

  export type ProductVideoSumAggregateInputType = {
    order?: true
  }

  export type ProductVideoMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    posterUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVideoMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    posterUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVideoCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    posterUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVideo to aggregate.
     */
    where?: ProductVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVideos to fetch.
     */
    orderBy?: ProductVideoOrderByWithRelationInput | ProductVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVideos
    **/
    _count?: true | ProductVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVideoMaxAggregateInputType
  }

  export type GetProductVideoAggregateType<T extends ProductVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVideo[P]>
      : GetScalarType<T[P], AggregateProductVideo[P]>
  }




  export type ProductVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVideoWhereInput
    orderBy?: ProductVideoOrderByWithAggregationInput | ProductVideoOrderByWithAggregationInput[]
    by: ProductVideoScalarFieldEnum[] | ProductVideoScalarFieldEnum
    having?: ProductVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVideoCountAggregateInputType | true
    _avg?: ProductVideoAvgAggregateInputType
    _sum?: ProductVideoSumAggregateInputType
    _min?: ProductVideoMinAggregateInputType
    _max?: ProductVideoMaxAggregateInputType
  }

  export type ProductVideoGroupByOutputType = {
    id: string
    productId: string
    url: string
    posterUrl: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProductVideoCountAggregateOutputType | null
    _avg: ProductVideoAvgAggregateOutputType | null
    _sum: ProductVideoSumAggregateOutputType | null
    _min: ProductVideoMinAggregateOutputType | null
    _max: ProductVideoMaxAggregateOutputType | null
  }

  type GetProductVideoGroupByPayload<T extends ProductVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVideoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVideoGroupByOutputType[P]>
        }
      >
    >


  export type ProductVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    posterUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVideo"]>

  export type ProductVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    posterUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVideo"]>

  export type ProductVideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    posterUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVideo"]>

  export type ProductVideoSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    posterUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "url" | "posterUrl" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["productVideo"]>
  export type ProductVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVideo"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      url: string
      posterUrl: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVideo"]>
    composites: {}
  }

  type ProductVideoGetPayload<S extends boolean | null | undefined | ProductVideoDefaultArgs> = $Result.GetResult<Prisma.$ProductVideoPayload, S>

  type ProductVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVideoCountAggregateInputType | true
    }

  export interface ProductVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVideo'], meta: { name: 'ProductVideo' } }
    /**
     * Find zero or one ProductVideo that matches the filter.
     * @param {ProductVideoFindUniqueArgs} args - Arguments to find a ProductVideo
     * @example
     * // Get one ProductVideo
     * const productVideo = await prisma.productVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVideoFindUniqueArgs>(args: SelectSubset<T, ProductVideoFindUniqueArgs<ExtArgs>>): Prisma__ProductVideoClient<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVideoFindUniqueOrThrowArgs} args - Arguments to find a ProductVideo
     * @example
     * // Get one ProductVideo
     * const productVideo = await prisma.productVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVideoClient<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVideoFindFirstArgs} args - Arguments to find a ProductVideo
     * @example
     * // Get one ProductVideo
     * const productVideo = await prisma.productVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVideoFindFirstArgs>(args?: SelectSubset<T, ProductVideoFindFirstArgs<ExtArgs>>): Prisma__ProductVideoClient<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVideoFindFirstOrThrowArgs} args - Arguments to find a ProductVideo
     * @example
     * // Get one ProductVideo
     * const productVideo = await prisma.productVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVideoClient<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVideos
     * const productVideos = await prisma.productVideo.findMany()
     * 
     * // Get first 10 ProductVideos
     * const productVideos = await prisma.productVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVideoWithIdOnly = await prisma.productVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVideoFindManyArgs>(args?: SelectSubset<T, ProductVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVideo.
     * @param {ProductVideoCreateArgs} args - Arguments to create a ProductVideo.
     * @example
     * // Create one ProductVideo
     * const ProductVideo = await prisma.productVideo.create({
     *   data: {
     *     // ... data to create a ProductVideo
     *   }
     * })
     * 
     */
    create<T extends ProductVideoCreateArgs>(args: SelectSubset<T, ProductVideoCreateArgs<ExtArgs>>): Prisma__ProductVideoClient<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVideos.
     * @param {ProductVideoCreateManyArgs} args - Arguments to create many ProductVideos.
     * @example
     * // Create many ProductVideos
     * const productVideo = await prisma.productVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVideoCreateManyArgs>(args?: SelectSubset<T, ProductVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVideos and returns the data saved in the database.
     * @param {ProductVideoCreateManyAndReturnArgs} args - Arguments to create many ProductVideos.
     * @example
     * // Create many ProductVideos
     * const productVideo = await prisma.productVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVideos and only return the `id`
     * const productVideoWithIdOnly = await prisma.productVideo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVideo.
     * @param {ProductVideoDeleteArgs} args - Arguments to delete one ProductVideo.
     * @example
     * // Delete one ProductVideo
     * const ProductVideo = await prisma.productVideo.delete({
     *   where: {
     *     // ... filter to delete one ProductVideo
     *   }
     * })
     * 
     */
    delete<T extends ProductVideoDeleteArgs>(args: SelectSubset<T, ProductVideoDeleteArgs<ExtArgs>>): Prisma__ProductVideoClient<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVideo.
     * @param {ProductVideoUpdateArgs} args - Arguments to update one ProductVideo.
     * @example
     * // Update one ProductVideo
     * const productVideo = await prisma.productVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVideoUpdateArgs>(args: SelectSubset<T, ProductVideoUpdateArgs<ExtArgs>>): Prisma__ProductVideoClient<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVideos.
     * @param {ProductVideoDeleteManyArgs} args - Arguments to filter ProductVideos to delete.
     * @example
     * // Delete a few ProductVideos
     * const { count } = await prisma.productVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVideoDeleteManyArgs>(args?: SelectSubset<T, ProductVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVideos
     * const productVideo = await prisma.productVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVideoUpdateManyArgs>(args: SelectSubset<T, ProductVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVideos and returns the data updated in the database.
     * @param {ProductVideoUpdateManyAndReturnArgs} args - Arguments to update many ProductVideos.
     * @example
     * // Update many ProductVideos
     * const productVideo = await prisma.productVideo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVideos and only return the `id`
     * const productVideoWithIdOnly = await prisma.productVideo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductVideoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVideo.
     * @param {ProductVideoUpsertArgs} args - Arguments to update or create a ProductVideo.
     * @example
     * // Update or create a ProductVideo
     * const productVideo = await prisma.productVideo.upsert({
     *   create: {
     *     // ... data to create a ProductVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVideo we want to update
     *   }
     * })
     */
    upsert<T extends ProductVideoUpsertArgs>(args: SelectSubset<T, ProductVideoUpsertArgs<ExtArgs>>): Prisma__ProductVideoClient<$Result.GetResult<Prisma.$ProductVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVideoCountArgs} args - Arguments to filter ProductVideos to count.
     * @example
     * // Count the number of ProductVideos
     * const count = await prisma.productVideo.count({
     *   where: {
     *     // ... the filter for the ProductVideos we want to count
     *   }
     * })
    **/
    count<T extends ProductVideoCountArgs>(
      args?: Subset<T, ProductVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVideoAggregateArgs>(args: Subset<T, ProductVideoAggregateArgs>): Prisma.PrismaPromise<GetProductVideoAggregateType<T>>

    /**
     * Group by ProductVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVideoGroupByArgs['orderBy'] }
        : { orderBy?: ProductVideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVideo model
   */
  readonly fields: ProductVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVideo model
   */
  interface ProductVideoFieldRefs {
    readonly id: FieldRef<"ProductVideo", 'String'>
    readonly productId: FieldRef<"ProductVideo", 'String'>
    readonly url: FieldRef<"ProductVideo", 'String'>
    readonly posterUrl: FieldRef<"ProductVideo", 'String'>
    readonly order: FieldRef<"ProductVideo", 'Int'>
    readonly createdAt: FieldRef<"ProductVideo", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVideo findUnique
   */
  export type ProductVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProductVideo to fetch.
     */
    where: ProductVideoWhereUniqueInput
  }

  /**
   * ProductVideo findUniqueOrThrow
   */
  export type ProductVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProductVideo to fetch.
     */
    where: ProductVideoWhereUniqueInput
  }

  /**
   * ProductVideo findFirst
   */
  export type ProductVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProductVideo to fetch.
     */
    where?: ProductVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVideos to fetch.
     */
    orderBy?: ProductVideoOrderByWithRelationInput | ProductVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVideos.
     */
    cursor?: ProductVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVideos.
     */
    distinct?: ProductVideoScalarFieldEnum | ProductVideoScalarFieldEnum[]
  }

  /**
   * ProductVideo findFirstOrThrow
   */
  export type ProductVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProductVideo to fetch.
     */
    where?: ProductVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVideos to fetch.
     */
    orderBy?: ProductVideoOrderByWithRelationInput | ProductVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVideos.
     */
    cursor?: ProductVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVideos.
     */
    distinct?: ProductVideoScalarFieldEnum | ProductVideoScalarFieldEnum[]
  }

  /**
   * ProductVideo findMany
   */
  export type ProductVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProductVideos to fetch.
     */
    where?: ProductVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVideos to fetch.
     */
    orderBy?: ProductVideoOrderByWithRelationInput | ProductVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVideos.
     */
    cursor?: ProductVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVideos.
     */
    skip?: number
    distinct?: ProductVideoScalarFieldEnum | ProductVideoScalarFieldEnum[]
  }

  /**
   * ProductVideo create
   */
  export type ProductVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVideo.
     */
    data: XOR<ProductVideoCreateInput, ProductVideoUncheckedCreateInput>
  }

  /**
   * ProductVideo createMany
   */
  export type ProductVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVideos.
     */
    data: ProductVideoCreateManyInput | ProductVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVideo createManyAndReturn
   */
  export type ProductVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVideos.
     */
    data: ProductVideoCreateManyInput | ProductVideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVideo update
   */
  export type ProductVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVideo.
     */
    data: XOR<ProductVideoUpdateInput, ProductVideoUncheckedUpdateInput>
    /**
     * Choose, which ProductVideo to update.
     */
    where: ProductVideoWhereUniqueInput
  }

  /**
   * ProductVideo updateMany
   */
  export type ProductVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVideos.
     */
    data: XOR<ProductVideoUpdateManyMutationInput, ProductVideoUncheckedUpdateManyInput>
    /**
     * Filter which ProductVideos to update
     */
    where?: ProductVideoWhereInput
    /**
     * Limit how many ProductVideos to update.
     */
    limit?: number
  }

  /**
   * ProductVideo updateManyAndReturn
   */
  export type ProductVideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * The data used to update ProductVideos.
     */
    data: XOR<ProductVideoUpdateManyMutationInput, ProductVideoUncheckedUpdateManyInput>
    /**
     * Filter which ProductVideos to update
     */
    where?: ProductVideoWhereInput
    /**
     * Limit how many ProductVideos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVideo upsert
   */
  export type ProductVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVideo to update in case it exists.
     */
    where: ProductVideoWhereUniqueInput
    /**
     * In case the ProductVideo found by the `where` argument doesn't exist, create a new ProductVideo with this data.
     */
    create: XOR<ProductVideoCreateInput, ProductVideoUncheckedCreateInput>
    /**
     * In case the ProductVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVideoUpdateInput, ProductVideoUncheckedUpdateInput>
  }

  /**
   * ProductVideo delete
   */
  export type ProductVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
    /**
     * Filter which ProductVideo to delete.
     */
    where: ProductVideoWhereUniqueInput
  }

  /**
   * ProductVideo deleteMany
   */
  export type ProductVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVideos to delete
     */
    where?: ProductVideoWhereInput
    /**
     * Limit how many ProductVideos to delete.
     */
    limit?: number
  }

  /**
   * ProductVideo without action
   */
  export type ProductVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVideo
     */
    select?: ProductVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVideo
     */
    omit?: ProductVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVideoInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    level: number | null
  }

  export type CategorySumAggregateOutputType = {
    level: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    name: string | null
    marketplaceId: string | null
    isDisabled: boolean | null
    parentId: string | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    name: string | null
    marketplaceId: string | null
    isDisabled: boolean | null
    parentId: string | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    externalId: number
    name: number
    marketplaceId: number
    isDisabled: number
    parentId: number
    level: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    level?: true
  }

  export type CategorySumAggregateInputType = {
    level?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    marketplaceId?: true
    isDisabled?: true
    parentId?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    marketplaceId?: true
    isDisabled?: true
    parentId?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    marketplaceId?: true
    isDisabled?: true
    parentId?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled: boolean
    parentId: string | null
    level: number
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    marketplaceId?: boolean
    isDisabled?: boolean
    parentId?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentCategory?: boolean | Category$parentCategoryArgs<ExtArgs>
    childCategories?: boolean | Category$childCategoriesArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    ancestors?: boolean | Category$ancestorsArgs<ExtArgs>
    descendants?: boolean | Category$descendantsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    marketplaceId?: boolean
    isDisabled?: boolean
    parentId?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentCategory?: boolean | Category$parentCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    marketplaceId?: boolean
    isDisabled?: boolean
    parentId?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentCategory?: boolean | Category$parentCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    externalId?: boolean
    name?: boolean
    marketplaceId?: boolean
    isDisabled?: boolean
    parentId?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "name" | "marketplaceId" | "isDisabled" | "parentId" | "level" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | Category$parentCategoryArgs<ExtArgs>
    childCategories?: boolean | Category$childCategoriesArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    ancestors?: boolean | Category$ancestorsArgs<ExtArgs>
    descendants?: boolean | Category$descendantsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | Category$parentCategoryArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | Category$parentCategoryArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parentCategory: Prisma.$CategoryPayload<ExtArgs> | null
      childCategories: Prisma.$CategoryPayload<ExtArgs>[]
      products: Prisma.$ProductToCategoryPayload<ExtArgs>[]
      ancestors: Prisma.$CategoryHierarchyPayload<ExtArgs>[]
      descendants: Prisma.$CategoryHierarchyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
      name: string
      marketplaceId: string
      isDisabled: boolean
      parentId: string | null
      level: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentCategory<T extends Category$parentCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentCategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childCategories<T extends Category$childCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$childCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ancestors<T extends Category$ancestorsArgs<ExtArgs> = {}>(args?: Subset<T, Category$ancestorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    descendants<T extends Category$descendantsArgs<ExtArgs> = {}>(args?: Subset<T, Category$descendantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly externalId: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly marketplaceId: FieldRef<"Category", 'String'>
    readonly isDisabled: FieldRef<"Category", 'Boolean'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly level: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parentCategory
   */
  export type Category$parentCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.childCategories
   */
  export type Category$childCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    where?: ProductToCategoryWhereInput
    orderBy?: ProductToCategoryOrderByWithRelationInput | ProductToCategoryOrderByWithRelationInput[]
    cursor?: ProductToCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductToCategoryScalarFieldEnum | ProductToCategoryScalarFieldEnum[]
  }

  /**
   * Category.ancestors
   */
  export type Category$ancestorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    where?: CategoryHierarchyWhereInput
    orderBy?: CategoryHierarchyOrderByWithRelationInput | CategoryHierarchyOrderByWithRelationInput[]
    cursor?: CategoryHierarchyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryHierarchyScalarFieldEnum | CategoryHierarchyScalarFieldEnum[]
  }

  /**
   * Category.descendants
   */
  export type Category$descendantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    where?: CategoryHierarchyWhereInput
    orderBy?: CategoryHierarchyOrderByWithRelationInput | CategoryHierarchyOrderByWithRelationInput[]
    cursor?: CategoryHierarchyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryHierarchyScalarFieldEnum | CategoryHierarchyScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model CategoryHierarchy
   */

  export type AggregateCategoryHierarchy = {
    _count: CategoryHierarchyCountAggregateOutputType | null
    _avg: CategoryHierarchyAvgAggregateOutputType | null
    _sum: CategoryHierarchySumAggregateOutputType | null
    _min: CategoryHierarchyMinAggregateOutputType | null
    _max: CategoryHierarchyMaxAggregateOutputType | null
  }

  export type CategoryHierarchyAvgAggregateOutputType = {
    depth: number | null
  }

  export type CategoryHierarchySumAggregateOutputType = {
    depth: number | null
  }

  export type CategoryHierarchyMinAggregateOutputType = {
    ancestorId: string | null
    descendantId: string | null
    depth: number | null
  }

  export type CategoryHierarchyMaxAggregateOutputType = {
    ancestorId: string | null
    descendantId: string | null
    depth: number | null
  }

  export type CategoryHierarchyCountAggregateOutputType = {
    ancestorId: number
    descendantId: number
    depth: number
    _all: number
  }


  export type CategoryHierarchyAvgAggregateInputType = {
    depth?: true
  }

  export type CategoryHierarchySumAggregateInputType = {
    depth?: true
  }

  export type CategoryHierarchyMinAggregateInputType = {
    ancestorId?: true
    descendantId?: true
    depth?: true
  }

  export type CategoryHierarchyMaxAggregateInputType = {
    ancestorId?: true
    descendantId?: true
    depth?: true
  }

  export type CategoryHierarchyCountAggregateInputType = {
    ancestorId?: true
    descendantId?: true
    depth?: true
    _all?: true
  }

  export type CategoryHierarchyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryHierarchy to aggregate.
     */
    where?: CategoryHierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryHierarchies to fetch.
     */
    orderBy?: CategoryHierarchyOrderByWithRelationInput | CategoryHierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryHierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryHierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryHierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryHierarchies
    **/
    _count?: true | CategoryHierarchyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryHierarchyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryHierarchySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryHierarchyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryHierarchyMaxAggregateInputType
  }

  export type GetCategoryHierarchyAggregateType<T extends CategoryHierarchyAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryHierarchy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryHierarchy[P]>
      : GetScalarType<T[P], AggregateCategoryHierarchy[P]>
  }




  export type CategoryHierarchyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryHierarchyWhereInput
    orderBy?: CategoryHierarchyOrderByWithAggregationInput | CategoryHierarchyOrderByWithAggregationInput[]
    by: CategoryHierarchyScalarFieldEnum[] | CategoryHierarchyScalarFieldEnum
    having?: CategoryHierarchyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryHierarchyCountAggregateInputType | true
    _avg?: CategoryHierarchyAvgAggregateInputType
    _sum?: CategoryHierarchySumAggregateInputType
    _min?: CategoryHierarchyMinAggregateInputType
    _max?: CategoryHierarchyMaxAggregateInputType
  }

  export type CategoryHierarchyGroupByOutputType = {
    ancestorId: string
    descendantId: string
    depth: number
    _count: CategoryHierarchyCountAggregateOutputType | null
    _avg: CategoryHierarchyAvgAggregateOutputType | null
    _sum: CategoryHierarchySumAggregateOutputType | null
    _min: CategoryHierarchyMinAggregateOutputType | null
    _max: CategoryHierarchyMaxAggregateOutputType | null
  }

  type GetCategoryHierarchyGroupByPayload<T extends CategoryHierarchyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryHierarchyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryHierarchyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryHierarchyGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryHierarchyGroupByOutputType[P]>
        }
      >
    >


  export type CategoryHierarchySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ancestorId?: boolean
    descendantId?: boolean
    depth?: boolean
    ancestor?: boolean | CategoryDefaultArgs<ExtArgs>
    descendant?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryHierarchy"]>

  export type CategoryHierarchySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ancestorId?: boolean
    descendantId?: boolean
    depth?: boolean
    ancestor?: boolean | CategoryDefaultArgs<ExtArgs>
    descendant?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryHierarchy"]>

  export type CategoryHierarchySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ancestorId?: boolean
    descendantId?: boolean
    depth?: boolean
    ancestor?: boolean | CategoryDefaultArgs<ExtArgs>
    descendant?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryHierarchy"]>

  export type CategoryHierarchySelectScalar = {
    ancestorId?: boolean
    descendantId?: boolean
    depth?: boolean
  }

  export type CategoryHierarchyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ancestorId" | "descendantId" | "depth", ExtArgs["result"]["categoryHierarchy"]>
  export type CategoryHierarchyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ancestor?: boolean | CategoryDefaultArgs<ExtArgs>
    descendant?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryHierarchyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ancestor?: boolean | CategoryDefaultArgs<ExtArgs>
    descendant?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryHierarchyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ancestor?: boolean | CategoryDefaultArgs<ExtArgs>
    descendant?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryHierarchyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryHierarchy"
    objects: {
      ancestor: Prisma.$CategoryPayload<ExtArgs>
      descendant: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ancestorId: string
      descendantId: string
      depth: number
    }, ExtArgs["result"]["categoryHierarchy"]>
    composites: {}
  }

  type CategoryHierarchyGetPayload<S extends boolean | null | undefined | CategoryHierarchyDefaultArgs> = $Result.GetResult<Prisma.$CategoryHierarchyPayload, S>

  type CategoryHierarchyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryHierarchyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryHierarchyCountAggregateInputType | true
    }

  export interface CategoryHierarchyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryHierarchy'], meta: { name: 'CategoryHierarchy' } }
    /**
     * Find zero or one CategoryHierarchy that matches the filter.
     * @param {CategoryHierarchyFindUniqueArgs} args - Arguments to find a CategoryHierarchy
     * @example
     * // Get one CategoryHierarchy
     * const categoryHierarchy = await prisma.categoryHierarchy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryHierarchyFindUniqueArgs>(args: SelectSubset<T, CategoryHierarchyFindUniqueArgs<ExtArgs>>): Prisma__CategoryHierarchyClient<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryHierarchy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryHierarchyFindUniqueOrThrowArgs} args - Arguments to find a CategoryHierarchy
     * @example
     * // Get one CategoryHierarchy
     * const categoryHierarchy = await prisma.categoryHierarchy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryHierarchyFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryHierarchyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryHierarchyClient<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryHierarchy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHierarchyFindFirstArgs} args - Arguments to find a CategoryHierarchy
     * @example
     * // Get one CategoryHierarchy
     * const categoryHierarchy = await prisma.categoryHierarchy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryHierarchyFindFirstArgs>(args?: SelectSubset<T, CategoryHierarchyFindFirstArgs<ExtArgs>>): Prisma__CategoryHierarchyClient<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryHierarchy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHierarchyFindFirstOrThrowArgs} args - Arguments to find a CategoryHierarchy
     * @example
     * // Get one CategoryHierarchy
     * const categoryHierarchy = await prisma.categoryHierarchy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryHierarchyFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryHierarchyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryHierarchyClient<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryHierarchies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHierarchyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryHierarchies
     * const categoryHierarchies = await prisma.categoryHierarchy.findMany()
     * 
     * // Get first 10 CategoryHierarchies
     * const categoryHierarchies = await prisma.categoryHierarchy.findMany({ take: 10 })
     * 
     * // Only select the `ancestorId`
     * const categoryHierarchyWithAncestorIdOnly = await prisma.categoryHierarchy.findMany({ select: { ancestorId: true } })
     * 
     */
    findMany<T extends CategoryHierarchyFindManyArgs>(args?: SelectSubset<T, CategoryHierarchyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryHierarchy.
     * @param {CategoryHierarchyCreateArgs} args - Arguments to create a CategoryHierarchy.
     * @example
     * // Create one CategoryHierarchy
     * const CategoryHierarchy = await prisma.categoryHierarchy.create({
     *   data: {
     *     // ... data to create a CategoryHierarchy
     *   }
     * })
     * 
     */
    create<T extends CategoryHierarchyCreateArgs>(args: SelectSubset<T, CategoryHierarchyCreateArgs<ExtArgs>>): Prisma__CategoryHierarchyClient<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryHierarchies.
     * @param {CategoryHierarchyCreateManyArgs} args - Arguments to create many CategoryHierarchies.
     * @example
     * // Create many CategoryHierarchies
     * const categoryHierarchy = await prisma.categoryHierarchy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryHierarchyCreateManyArgs>(args?: SelectSubset<T, CategoryHierarchyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryHierarchies and returns the data saved in the database.
     * @param {CategoryHierarchyCreateManyAndReturnArgs} args - Arguments to create many CategoryHierarchies.
     * @example
     * // Create many CategoryHierarchies
     * const categoryHierarchy = await prisma.categoryHierarchy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryHierarchies and only return the `ancestorId`
     * const categoryHierarchyWithAncestorIdOnly = await prisma.categoryHierarchy.createManyAndReturn({
     *   select: { ancestorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryHierarchyCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryHierarchyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryHierarchy.
     * @param {CategoryHierarchyDeleteArgs} args - Arguments to delete one CategoryHierarchy.
     * @example
     * // Delete one CategoryHierarchy
     * const CategoryHierarchy = await prisma.categoryHierarchy.delete({
     *   where: {
     *     // ... filter to delete one CategoryHierarchy
     *   }
     * })
     * 
     */
    delete<T extends CategoryHierarchyDeleteArgs>(args: SelectSubset<T, CategoryHierarchyDeleteArgs<ExtArgs>>): Prisma__CategoryHierarchyClient<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryHierarchy.
     * @param {CategoryHierarchyUpdateArgs} args - Arguments to update one CategoryHierarchy.
     * @example
     * // Update one CategoryHierarchy
     * const categoryHierarchy = await prisma.categoryHierarchy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryHierarchyUpdateArgs>(args: SelectSubset<T, CategoryHierarchyUpdateArgs<ExtArgs>>): Prisma__CategoryHierarchyClient<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryHierarchies.
     * @param {CategoryHierarchyDeleteManyArgs} args - Arguments to filter CategoryHierarchies to delete.
     * @example
     * // Delete a few CategoryHierarchies
     * const { count } = await prisma.categoryHierarchy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryHierarchyDeleteManyArgs>(args?: SelectSubset<T, CategoryHierarchyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryHierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHierarchyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryHierarchies
     * const categoryHierarchy = await prisma.categoryHierarchy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryHierarchyUpdateManyArgs>(args: SelectSubset<T, CategoryHierarchyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryHierarchies and returns the data updated in the database.
     * @param {CategoryHierarchyUpdateManyAndReturnArgs} args - Arguments to update many CategoryHierarchies.
     * @example
     * // Update many CategoryHierarchies
     * const categoryHierarchy = await prisma.categoryHierarchy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryHierarchies and only return the `ancestorId`
     * const categoryHierarchyWithAncestorIdOnly = await prisma.categoryHierarchy.updateManyAndReturn({
     *   select: { ancestorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryHierarchyUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryHierarchyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryHierarchy.
     * @param {CategoryHierarchyUpsertArgs} args - Arguments to update or create a CategoryHierarchy.
     * @example
     * // Update or create a CategoryHierarchy
     * const categoryHierarchy = await prisma.categoryHierarchy.upsert({
     *   create: {
     *     // ... data to create a CategoryHierarchy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryHierarchy we want to update
     *   }
     * })
     */
    upsert<T extends CategoryHierarchyUpsertArgs>(args: SelectSubset<T, CategoryHierarchyUpsertArgs<ExtArgs>>): Prisma__CategoryHierarchyClient<$Result.GetResult<Prisma.$CategoryHierarchyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryHierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHierarchyCountArgs} args - Arguments to filter CategoryHierarchies to count.
     * @example
     * // Count the number of CategoryHierarchies
     * const count = await prisma.categoryHierarchy.count({
     *   where: {
     *     // ... the filter for the CategoryHierarchies we want to count
     *   }
     * })
    **/
    count<T extends CategoryHierarchyCountArgs>(
      args?: Subset<T, CategoryHierarchyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryHierarchyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryHierarchy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHierarchyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryHierarchyAggregateArgs>(args: Subset<T, CategoryHierarchyAggregateArgs>): Prisma.PrismaPromise<GetCategoryHierarchyAggregateType<T>>

    /**
     * Group by CategoryHierarchy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHierarchyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryHierarchyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryHierarchyGroupByArgs['orderBy'] }
        : { orderBy?: CategoryHierarchyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryHierarchyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryHierarchyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryHierarchy model
   */
  readonly fields: CategoryHierarchyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryHierarchy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryHierarchyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ancestor<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    descendant<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoryHierarchy model
   */
  interface CategoryHierarchyFieldRefs {
    readonly ancestorId: FieldRef<"CategoryHierarchy", 'String'>
    readonly descendantId: FieldRef<"CategoryHierarchy", 'String'>
    readonly depth: FieldRef<"CategoryHierarchy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoryHierarchy findUnique
   */
  export type CategoryHierarchyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHierarchy to fetch.
     */
    where: CategoryHierarchyWhereUniqueInput
  }

  /**
   * CategoryHierarchy findUniqueOrThrow
   */
  export type CategoryHierarchyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHierarchy to fetch.
     */
    where: CategoryHierarchyWhereUniqueInput
  }

  /**
   * CategoryHierarchy findFirst
   */
  export type CategoryHierarchyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHierarchy to fetch.
     */
    where?: CategoryHierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryHierarchies to fetch.
     */
    orderBy?: CategoryHierarchyOrderByWithRelationInput | CategoryHierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryHierarchies.
     */
    cursor?: CategoryHierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryHierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryHierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryHierarchies.
     */
    distinct?: CategoryHierarchyScalarFieldEnum | CategoryHierarchyScalarFieldEnum[]
  }

  /**
   * CategoryHierarchy findFirstOrThrow
   */
  export type CategoryHierarchyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHierarchy to fetch.
     */
    where?: CategoryHierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryHierarchies to fetch.
     */
    orderBy?: CategoryHierarchyOrderByWithRelationInput | CategoryHierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryHierarchies.
     */
    cursor?: CategoryHierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryHierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryHierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryHierarchies.
     */
    distinct?: CategoryHierarchyScalarFieldEnum | CategoryHierarchyScalarFieldEnum[]
  }

  /**
   * CategoryHierarchy findMany
   */
  export type CategoryHierarchyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHierarchies to fetch.
     */
    where?: CategoryHierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryHierarchies to fetch.
     */
    orderBy?: CategoryHierarchyOrderByWithRelationInput | CategoryHierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryHierarchies.
     */
    cursor?: CategoryHierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryHierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryHierarchies.
     */
    skip?: number
    distinct?: CategoryHierarchyScalarFieldEnum | CategoryHierarchyScalarFieldEnum[]
  }

  /**
   * CategoryHierarchy create
   */
  export type CategoryHierarchyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryHierarchy.
     */
    data: XOR<CategoryHierarchyCreateInput, CategoryHierarchyUncheckedCreateInput>
  }

  /**
   * CategoryHierarchy createMany
   */
  export type CategoryHierarchyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryHierarchies.
     */
    data: CategoryHierarchyCreateManyInput | CategoryHierarchyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryHierarchy createManyAndReturn
   */
  export type CategoryHierarchyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryHierarchies.
     */
    data: CategoryHierarchyCreateManyInput | CategoryHierarchyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryHierarchy update
   */
  export type CategoryHierarchyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryHierarchy.
     */
    data: XOR<CategoryHierarchyUpdateInput, CategoryHierarchyUncheckedUpdateInput>
    /**
     * Choose, which CategoryHierarchy to update.
     */
    where: CategoryHierarchyWhereUniqueInput
  }

  /**
   * CategoryHierarchy updateMany
   */
  export type CategoryHierarchyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryHierarchies.
     */
    data: XOR<CategoryHierarchyUpdateManyMutationInput, CategoryHierarchyUncheckedUpdateManyInput>
    /**
     * Filter which CategoryHierarchies to update
     */
    where?: CategoryHierarchyWhereInput
    /**
     * Limit how many CategoryHierarchies to update.
     */
    limit?: number
  }

  /**
   * CategoryHierarchy updateManyAndReturn
   */
  export type CategoryHierarchyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * The data used to update CategoryHierarchies.
     */
    data: XOR<CategoryHierarchyUpdateManyMutationInput, CategoryHierarchyUncheckedUpdateManyInput>
    /**
     * Filter which CategoryHierarchies to update
     */
    where?: CategoryHierarchyWhereInput
    /**
     * Limit how many CategoryHierarchies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryHierarchy upsert
   */
  export type CategoryHierarchyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryHierarchy to update in case it exists.
     */
    where: CategoryHierarchyWhereUniqueInput
    /**
     * In case the CategoryHierarchy found by the `where` argument doesn't exist, create a new CategoryHierarchy with this data.
     */
    create: XOR<CategoryHierarchyCreateInput, CategoryHierarchyUncheckedCreateInput>
    /**
     * In case the CategoryHierarchy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryHierarchyUpdateInput, CategoryHierarchyUncheckedUpdateInput>
  }

  /**
   * CategoryHierarchy delete
   */
  export type CategoryHierarchyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
    /**
     * Filter which CategoryHierarchy to delete.
     */
    where: CategoryHierarchyWhereUniqueInput
  }

  /**
   * CategoryHierarchy deleteMany
   */
  export type CategoryHierarchyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryHierarchies to delete
     */
    where?: CategoryHierarchyWhereInput
    /**
     * Limit how many CategoryHierarchies to delete.
     */
    limit?: number
  }

  /**
   * CategoryHierarchy without action
   */
  export type CategoryHierarchyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHierarchy
     */
    select?: CategoryHierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHierarchy
     */
    omit?: CategoryHierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHierarchyInclude<ExtArgs> | null
  }


  /**
   * Model ProductToCategory
   */

  export type AggregateProductToCategory = {
    _count: ProductToCategoryCountAggregateOutputType | null
    _min: ProductToCategoryMinAggregateOutputType | null
    _max: ProductToCategoryMaxAggregateOutputType | null
  }

  export type ProductToCategoryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductToCategoryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductToCategoryCountAggregateOutputType = {
    id: number
    productId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductToCategoryMinAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductToCategoryMaxAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductToCategoryCountAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductToCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductToCategory to aggregate.
     */
    where?: ProductToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductToCategories to fetch.
     */
    orderBy?: ProductToCategoryOrderByWithRelationInput | ProductToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductToCategories
    **/
    _count?: true | ProductToCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductToCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductToCategoryMaxAggregateInputType
  }

  export type GetProductToCategoryAggregateType<T extends ProductToCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductToCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductToCategory[P]>
      : GetScalarType<T[P], AggregateProductToCategory[P]>
  }




  export type ProductToCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductToCategoryWhereInput
    orderBy?: ProductToCategoryOrderByWithAggregationInput | ProductToCategoryOrderByWithAggregationInput[]
    by: ProductToCategoryScalarFieldEnum[] | ProductToCategoryScalarFieldEnum
    having?: ProductToCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductToCategoryCountAggregateInputType | true
    _min?: ProductToCategoryMinAggregateInputType
    _max?: ProductToCategoryMaxAggregateInputType
  }

  export type ProductToCategoryGroupByOutputType = {
    id: string
    productId: string
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductToCategoryCountAggregateOutputType | null
    _min: ProductToCategoryMinAggregateOutputType | null
    _max: ProductToCategoryMaxAggregateOutputType | null
  }

  type GetProductToCategoryGroupByPayload<T extends ProductToCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductToCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductToCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductToCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductToCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductToCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productToCategory"]>

  export type ProductToCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productToCategory"]>

  export type ProductToCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productToCategory"]>

  export type ProductToCategorySelectScalar = {
    id?: boolean
    productId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductToCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["productToCategory"]>
  export type ProductToCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductToCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductToCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductToCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductToCategory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productToCategory"]>
    composites: {}
  }

  type ProductToCategoryGetPayload<S extends boolean | null | undefined | ProductToCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductToCategoryPayload, S>

  type ProductToCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductToCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductToCategoryCountAggregateInputType | true
    }

  export interface ProductToCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductToCategory'], meta: { name: 'ProductToCategory' } }
    /**
     * Find zero or one ProductToCategory that matches the filter.
     * @param {ProductToCategoryFindUniqueArgs} args - Arguments to find a ProductToCategory
     * @example
     * // Get one ProductToCategory
     * const productToCategory = await prisma.productToCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductToCategoryFindUniqueArgs>(args: SelectSubset<T, ProductToCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductToCategoryClient<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductToCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductToCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductToCategory
     * @example
     * // Get one ProductToCategory
     * const productToCategory = await prisma.productToCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductToCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductToCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductToCategoryClient<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductToCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductToCategoryFindFirstArgs} args - Arguments to find a ProductToCategory
     * @example
     * // Get one ProductToCategory
     * const productToCategory = await prisma.productToCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductToCategoryFindFirstArgs>(args?: SelectSubset<T, ProductToCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductToCategoryClient<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductToCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductToCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductToCategory
     * @example
     * // Get one ProductToCategory
     * const productToCategory = await prisma.productToCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductToCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductToCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductToCategoryClient<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductToCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductToCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductToCategories
     * const productToCategories = await prisma.productToCategory.findMany()
     * 
     * // Get first 10 ProductToCategories
     * const productToCategories = await prisma.productToCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productToCategoryWithIdOnly = await prisma.productToCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductToCategoryFindManyArgs>(args?: SelectSubset<T, ProductToCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductToCategory.
     * @param {ProductToCategoryCreateArgs} args - Arguments to create a ProductToCategory.
     * @example
     * // Create one ProductToCategory
     * const ProductToCategory = await prisma.productToCategory.create({
     *   data: {
     *     // ... data to create a ProductToCategory
     *   }
     * })
     * 
     */
    create<T extends ProductToCategoryCreateArgs>(args: SelectSubset<T, ProductToCategoryCreateArgs<ExtArgs>>): Prisma__ProductToCategoryClient<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductToCategories.
     * @param {ProductToCategoryCreateManyArgs} args - Arguments to create many ProductToCategories.
     * @example
     * // Create many ProductToCategories
     * const productToCategory = await prisma.productToCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductToCategoryCreateManyArgs>(args?: SelectSubset<T, ProductToCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductToCategories and returns the data saved in the database.
     * @param {ProductToCategoryCreateManyAndReturnArgs} args - Arguments to create many ProductToCategories.
     * @example
     * // Create many ProductToCategories
     * const productToCategory = await prisma.productToCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductToCategories and only return the `id`
     * const productToCategoryWithIdOnly = await prisma.productToCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductToCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductToCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductToCategory.
     * @param {ProductToCategoryDeleteArgs} args - Arguments to delete one ProductToCategory.
     * @example
     * // Delete one ProductToCategory
     * const ProductToCategory = await prisma.productToCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductToCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductToCategoryDeleteArgs>(args: SelectSubset<T, ProductToCategoryDeleteArgs<ExtArgs>>): Prisma__ProductToCategoryClient<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductToCategory.
     * @param {ProductToCategoryUpdateArgs} args - Arguments to update one ProductToCategory.
     * @example
     * // Update one ProductToCategory
     * const productToCategory = await prisma.productToCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductToCategoryUpdateArgs>(args: SelectSubset<T, ProductToCategoryUpdateArgs<ExtArgs>>): Prisma__ProductToCategoryClient<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductToCategories.
     * @param {ProductToCategoryDeleteManyArgs} args - Arguments to filter ProductToCategories to delete.
     * @example
     * // Delete a few ProductToCategories
     * const { count } = await prisma.productToCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductToCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductToCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductToCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductToCategories
     * const productToCategory = await prisma.productToCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductToCategoryUpdateManyArgs>(args: SelectSubset<T, ProductToCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductToCategories and returns the data updated in the database.
     * @param {ProductToCategoryUpdateManyAndReturnArgs} args - Arguments to update many ProductToCategories.
     * @example
     * // Update many ProductToCategories
     * const productToCategory = await prisma.productToCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductToCategories and only return the `id`
     * const productToCategoryWithIdOnly = await prisma.productToCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductToCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductToCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductToCategory.
     * @param {ProductToCategoryUpsertArgs} args - Arguments to update or create a ProductToCategory.
     * @example
     * // Update or create a ProductToCategory
     * const productToCategory = await prisma.productToCategory.upsert({
     *   create: {
     *     // ... data to create a ProductToCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductToCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductToCategoryUpsertArgs>(args: SelectSubset<T, ProductToCategoryUpsertArgs<ExtArgs>>): Prisma__ProductToCategoryClient<$Result.GetResult<Prisma.$ProductToCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductToCategoryCountArgs} args - Arguments to filter ProductToCategories to count.
     * @example
     * // Count the number of ProductToCategories
     * const count = await prisma.productToCategory.count({
     *   where: {
     *     // ... the filter for the ProductToCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductToCategoryCountArgs>(
      args?: Subset<T, ProductToCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductToCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductToCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductToCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductToCategoryAggregateArgs>(args: Subset<T, ProductToCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductToCategoryAggregateType<T>>

    /**
     * Group by ProductToCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductToCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductToCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductToCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductToCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductToCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductToCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductToCategory model
   */
  readonly fields: ProductToCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductToCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductToCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductToCategory model
   */
  interface ProductToCategoryFieldRefs {
    readonly id: FieldRef<"ProductToCategory", 'String'>
    readonly productId: FieldRef<"ProductToCategory", 'String'>
    readonly categoryId: FieldRef<"ProductToCategory", 'String'>
    readonly createdAt: FieldRef<"ProductToCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductToCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductToCategory findUnique
   */
  export type ProductToCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductToCategory to fetch.
     */
    where: ProductToCategoryWhereUniqueInput
  }

  /**
   * ProductToCategory findUniqueOrThrow
   */
  export type ProductToCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductToCategory to fetch.
     */
    where: ProductToCategoryWhereUniqueInput
  }

  /**
   * ProductToCategory findFirst
   */
  export type ProductToCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductToCategory to fetch.
     */
    where?: ProductToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductToCategories to fetch.
     */
    orderBy?: ProductToCategoryOrderByWithRelationInput | ProductToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductToCategories.
     */
    cursor?: ProductToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductToCategories.
     */
    distinct?: ProductToCategoryScalarFieldEnum | ProductToCategoryScalarFieldEnum[]
  }

  /**
   * ProductToCategory findFirstOrThrow
   */
  export type ProductToCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductToCategory to fetch.
     */
    where?: ProductToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductToCategories to fetch.
     */
    orderBy?: ProductToCategoryOrderByWithRelationInput | ProductToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductToCategories.
     */
    cursor?: ProductToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductToCategories.
     */
    distinct?: ProductToCategoryScalarFieldEnum | ProductToCategoryScalarFieldEnum[]
  }

  /**
   * ProductToCategory findMany
   */
  export type ProductToCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductToCategories to fetch.
     */
    where?: ProductToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductToCategories to fetch.
     */
    orderBy?: ProductToCategoryOrderByWithRelationInput | ProductToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductToCategories.
     */
    cursor?: ProductToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductToCategories.
     */
    skip?: number
    distinct?: ProductToCategoryScalarFieldEnum | ProductToCategoryScalarFieldEnum[]
  }

  /**
   * ProductToCategory create
   */
  export type ProductToCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductToCategory.
     */
    data: XOR<ProductToCategoryCreateInput, ProductToCategoryUncheckedCreateInput>
  }

  /**
   * ProductToCategory createMany
   */
  export type ProductToCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductToCategories.
     */
    data: ProductToCategoryCreateManyInput | ProductToCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductToCategory createManyAndReturn
   */
  export type ProductToCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductToCategories.
     */
    data: ProductToCategoryCreateManyInput | ProductToCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductToCategory update
   */
  export type ProductToCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductToCategory.
     */
    data: XOR<ProductToCategoryUpdateInput, ProductToCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductToCategory to update.
     */
    where: ProductToCategoryWhereUniqueInput
  }

  /**
   * ProductToCategory updateMany
   */
  export type ProductToCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductToCategories.
     */
    data: XOR<ProductToCategoryUpdateManyMutationInput, ProductToCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductToCategories to update
     */
    where?: ProductToCategoryWhereInput
    /**
     * Limit how many ProductToCategories to update.
     */
    limit?: number
  }

  /**
   * ProductToCategory updateManyAndReturn
   */
  export type ProductToCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductToCategories.
     */
    data: XOR<ProductToCategoryUpdateManyMutationInput, ProductToCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductToCategories to update
     */
    where?: ProductToCategoryWhereInput
    /**
     * Limit how many ProductToCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductToCategory upsert
   */
  export type ProductToCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductToCategory to update in case it exists.
     */
    where: ProductToCategoryWhereUniqueInput
    /**
     * In case the ProductToCategory found by the `where` argument doesn't exist, create a new ProductToCategory with this data.
     */
    create: XOR<ProductToCategoryCreateInput, ProductToCategoryUncheckedCreateInput>
    /**
     * In case the ProductToCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductToCategoryUpdateInput, ProductToCategoryUncheckedUpdateInput>
  }

  /**
   * ProductToCategory delete
   */
  export type ProductToCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductToCategory to delete.
     */
    where: ProductToCategoryWhereUniqueInput
  }

  /**
   * ProductToCategory deleteMany
   */
  export type ProductToCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductToCategories to delete
     */
    where?: ProductToCategoryWhereInput
    /**
     * Limit how many ProductToCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductToCategory without action
   */
  export type ProductToCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductToCategory
     */
    select?: ProductToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductToCategory
     */
    omit?: ProductToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductToCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    slug: 'slug',
    externalId: 'externalId',
    name: 'name',
    description: 'description',
    price: 'price',
    discount: 'discount',
    quantity: 'quantity',
    keywords: 'keywords',
    richContent: 'richContent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    blurhash: 'blurhash',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ProductVideoScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    posterUrl: 'posterUrl',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVideoScalarFieldEnum = (typeof ProductVideoScalarFieldEnum)[keyof typeof ProductVideoScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    name: 'name',
    marketplaceId: 'marketplaceId',
    isDisabled: 'isDisabled',
    parentId: 'parentId',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CategoryHierarchyScalarFieldEnum: {
    ancestorId: 'ancestorId',
    descendantId: 'descendantId',
    depth: 'depth'
  };

  export type CategoryHierarchyScalarFieldEnum = (typeof CategoryHierarchyScalarFieldEnum)[keyof typeof CategoryHierarchyScalarFieldEnum]


  export const ProductToCategoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductToCategoryScalarFieldEnum = (typeof ProductToCategoryScalarFieldEnum)[keyof typeof ProductToCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    slug?: StringFilter<"Product"> | string
    externalId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discount?: IntFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    keywords?: StringNullableListFilter<"Product">
    richContent?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    ProductImage?: ProductImageListRelationFilter
    ProductVideo?: ProductVideoListRelationFilter
    categories?: ProductToCategoryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    slug?: SortOrder
    externalId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    quantity?: SortOrder
    keywords?: SortOrder
    richContent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ProductImage?: ProductImageOrderByRelationAggregateInput
    ProductVideo?: ProductVideoOrderByRelationAggregateInput
    categories?: ProductToCategoryOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    externalId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discount?: IntFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    keywords?: StringNullableListFilter<"Product">
    richContent?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    ProductImage?: ProductImageListRelationFilter
    ProductVideo?: ProductVideoListRelationFilter
    categories?: ProductToCategoryListRelationFilter
  }, "slug">

  export type ProductOrderByWithAggregationInput = {
    slug?: SortOrder
    externalId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    quantity?: SortOrder
    keywords?: SortOrder
    richContent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"Product"> | string
    externalId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    discount?: IntWithAggregatesFilter<"Product"> | number
    quantity?: IntWithAggregatesFilter<"Product"> | number
    keywords?: StringNullableListFilter<"Product">
    richContent?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    blurhash?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    updatedAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    blurhash?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    blurhash?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    updatedAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    blurhash?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductImage"> | string
    productId?: StringWithAggregatesFilter<"ProductImage"> | string
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    blurhash?: StringWithAggregatesFilter<"ProductImage"> | string
    order?: IntWithAggregatesFilter<"ProductImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductImage"> | Date | string
  }

  export type ProductVideoWhereInput = {
    AND?: ProductVideoWhereInput | ProductVideoWhereInput[]
    OR?: ProductVideoWhereInput[]
    NOT?: ProductVideoWhereInput | ProductVideoWhereInput[]
    id?: StringFilter<"ProductVideo"> | string
    productId?: StringFilter<"ProductVideo"> | string
    url?: StringFilter<"ProductVideo"> | string
    posterUrl?: StringFilter<"ProductVideo"> | string
    order?: IntFilter<"ProductVideo"> | number
    createdAt?: DateTimeFilter<"ProductVideo"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVideo"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductVideoOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    posterUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVideoWhereInput | ProductVideoWhereInput[]
    OR?: ProductVideoWhereInput[]
    NOT?: ProductVideoWhereInput | ProductVideoWhereInput[]
    productId?: StringFilter<"ProductVideo"> | string
    url?: StringFilter<"ProductVideo"> | string
    posterUrl?: StringFilter<"ProductVideo"> | string
    order?: IntFilter<"ProductVideo"> | number
    createdAt?: DateTimeFilter<"ProductVideo"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVideo"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductVideoOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    posterUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVideoCountOrderByAggregateInput
    _avg?: ProductVideoAvgOrderByAggregateInput
    _max?: ProductVideoMaxOrderByAggregateInput
    _min?: ProductVideoMinOrderByAggregateInput
    _sum?: ProductVideoSumOrderByAggregateInput
  }

  export type ProductVideoScalarWhereWithAggregatesInput = {
    AND?: ProductVideoScalarWhereWithAggregatesInput | ProductVideoScalarWhereWithAggregatesInput[]
    OR?: ProductVideoScalarWhereWithAggregatesInput[]
    NOT?: ProductVideoScalarWhereWithAggregatesInput | ProductVideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVideo"> | string
    productId?: StringWithAggregatesFilter<"ProductVideo"> | string
    url?: StringWithAggregatesFilter<"ProductVideo"> | string
    posterUrl?: StringWithAggregatesFilter<"ProductVideo"> | string
    order?: IntWithAggregatesFilter<"ProductVideo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductVideo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVideo"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    externalId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    marketplaceId?: StringFilter<"Category"> | string
    isDisabled?: BoolFilter<"Category"> | boolean
    parentId?: StringNullableFilter<"Category"> | string | null
    level?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parentCategory?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    childCategories?: CategoryListRelationFilter
    products?: ProductToCategoryListRelationFilter
    ancestors?: CategoryHierarchyListRelationFilter
    descendants?: CategoryHierarchyListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    marketplaceId?: SortOrder
    isDisabled?: SortOrder
    parentId?: SortOrderInput | SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentCategory?: CategoryOrderByWithRelationInput
    childCategories?: CategoryOrderByRelationAggregateInput
    products?: ProductToCategoryOrderByRelationAggregateInput
    ancestors?: CategoryHierarchyOrderByRelationAggregateInput
    descendants?: CategoryHierarchyOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId_marketplaceId?: CategoryExternalIdMarketplaceIdCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    externalId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    marketplaceId?: StringFilter<"Category"> | string
    isDisabled?: BoolFilter<"Category"> | boolean
    parentId?: StringNullableFilter<"Category"> | string | null
    level?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parentCategory?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    childCategories?: CategoryListRelationFilter
    products?: ProductToCategoryListRelationFilter
    ancestors?: CategoryHierarchyListRelationFilter
    descendants?: CategoryHierarchyListRelationFilter
  }, "id" | "externalId_marketplaceId">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    marketplaceId?: SortOrder
    isDisabled?: SortOrder
    parentId?: SortOrderInput | SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    externalId?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    marketplaceId?: StringWithAggregatesFilter<"Category"> | string
    isDisabled?: BoolWithAggregatesFilter<"Category"> | boolean
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    level?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CategoryHierarchyWhereInput = {
    AND?: CategoryHierarchyWhereInput | CategoryHierarchyWhereInput[]
    OR?: CategoryHierarchyWhereInput[]
    NOT?: CategoryHierarchyWhereInput | CategoryHierarchyWhereInput[]
    ancestorId?: StringFilter<"CategoryHierarchy"> | string
    descendantId?: StringFilter<"CategoryHierarchy"> | string
    depth?: IntFilter<"CategoryHierarchy"> | number
    ancestor?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    descendant?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoryHierarchyOrderByWithRelationInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
    ancestor?: CategoryOrderByWithRelationInput
    descendant?: CategoryOrderByWithRelationInput
  }

  export type CategoryHierarchyWhereUniqueInput = Prisma.AtLeast<{
    ancestorId_descendantId?: CategoryHierarchyAncestorIdDescendantIdCompoundUniqueInput
    AND?: CategoryHierarchyWhereInput | CategoryHierarchyWhereInput[]
    OR?: CategoryHierarchyWhereInput[]
    NOT?: CategoryHierarchyWhereInput | CategoryHierarchyWhereInput[]
    ancestorId?: StringFilter<"CategoryHierarchy"> | string
    descendantId?: StringFilter<"CategoryHierarchy"> | string
    depth?: IntFilter<"CategoryHierarchy"> | number
    ancestor?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    descendant?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "ancestorId_descendantId" | "ancestorId_descendantId">

  export type CategoryHierarchyOrderByWithAggregationInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
    _count?: CategoryHierarchyCountOrderByAggregateInput
    _avg?: CategoryHierarchyAvgOrderByAggregateInput
    _max?: CategoryHierarchyMaxOrderByAggregateInput
    _min?: CategoryHierarchyMinOrderByAggregateInput
    _sum?: CategoryHierarchySumOrderByAggregateInput
  }

  export type CategoryHierarchyScalarWhereWithAggregatesInput = {
    AND?: CategoryHierarchyScalarWhereWithAggregatesInput | CategoryHierarchyScalarWhereWithAggregatesInput[]
    OR?: CategoryHierarchyScalarWhereWithAggregatesInput[]
    NOT?: CategoryHierarchyScalarWhereWithAggregatesInput | CategoryHierarchyScalarWhereWithAggregatesInput[]
    ancestorId?: StringWithAggregatesFilter<"CategoryHierarchy"> | string
    descendantId?: StringWithAggregatesFilter<"CategoryHierarchy"> | string
    depth?: IntWithAggregatesFilter<"CategoryHierarchy"> | number
  }

  export type ProductToCategoryWhereInput = {
    AND?: ProductToCategoryWhereInput | ProductToCategoryWhereInput[]
    OR?: ProductToCategoryWhereInput[]
    NOT?: ProductToCategoryWhereInput | ProductToCategoryWhereInput[]
    id?: StringFilter<"ProductToCategory"> | string
    productId?: StringFilter<"ProductToCategory"> | string
    categoryId?: StringFilter<"ProductToCategory"> | string
    createdAt?: DateTimeFilter<"ProductToCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductToCategory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type ProductToCategoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ProductToCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_categoryId?: ProductToCategoryProductIdCategoryIdCompoundUniqueInput
    AND?: ProductToCategoryWhereInput | ProductToCategoryWhereInput[]
    OR?: ProductToCategoryWhereInput[]
    NOT?: ProductToCategoryWhereInput | ProductToCategoryWhereInput[]
    productId?: StringFilter<"ProductToCategory"> | string
    categoryId?: StringFilter<"ProductToCategory"> | string
    createdAt?: DateTimeFilter<"ProductToCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductToCategory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "productId_categoryId">

  export type ProductToCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductToCategoryCountOrderByAggregateInput
    _max?: ProductToCategoryMaxOrderByAggregateInput
    _min?: ProductToCategoryMinOrderByAggregateInput
  }

  export type ProductToCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductToCategoryScalarWhereWithAggregatesInput | ProductToCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductToCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductToCategoryScalarWhereWithAggregatesInput | ProductToCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductToCategory"> | string
    productId?: StringWithAggregatesFilter<"ProductToCategory"> | string
    categoryId?: StringWithAggregatesFilter<"ProductToCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductToCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductToCategory"> | Date | string
  }

  export type ProductCreateInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
    ProductVideo?: ProductVideoCreateNestedManyWithoutProductInput
    categories?: ProductToCategoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    ProductVideo?: ProductVideoUncheckedCreateNestedManyWithoutProductInput
    categories?: ProductToCategoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
    ProductVideo?: ProductVideoUpdateManyWithoutProductNestedInput
    categories?: ProductToCategoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    ProductVideo?: ProductVideoUncheckedUpdateManyWithoutProductNestedInput
    categories?: ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateInput = {
    id?: string
    url: string
    blurhash: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductImageInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: string
    productId: string
    url: string
    blurhash: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blurhash?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductImageNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blurhash?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyInput = {
    id?: string
    productId: string
    url: string
    blurhash: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blurhash?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blurhash?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVideoCreateInput = {
    id?: string
    url: string
    posterUrl: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductVideoInput
  }

  export type ProductVideoUncheckedCreateInput = {
    id?: string
    productId: string
    url: string
    posterUrl: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductVideoNestedInput
  }

  export type ProductVideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVideoCreateManyInput = {
    id?: string
    productId: string
    url: string
    posterUrl: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: CategoryCreateNestedOneWithoutChildCategoriesInput
    childCategories?: CategoryCreateNestedManyWithoutParentCategoryInput
    products?: ProductToCategoryCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryHierarchyCreateNestedManyWithoutAncestorInput
    descendants?: CategoryHierarchyCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    parentId?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childCategories?: CategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    products?: ProductToCategoryUncheckedCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryHierarchyUncheckedCreateNestedManyWithoutAncestorInput
    descendants?: CategoryHierarchyUncheckedCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: CategoryUpdateOneWithoutChildCategoriesNestedInput
    childCategories?: CategoryUpdateManyWithoutParentCategoryNestedInput
    products?: ProductToCategoryUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryHierarchyUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryHierarchyUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCategories?: CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    products?: ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryHierarchyUncheckedUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryHierarchyUncheckedUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    parentId?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryHierarchyCreateInput = {
    depth: number
    ancestor: CategoryCreateNestedOneWithoutAncestorsInput
    descendant: CategoryCreateNestedOneWithoutDescendantsInput
  }

  export type CategoryHierarchyUncheckedCreateInput = {
    ancestorId: string
    descendantId: string
    depth: number
  }

  export type CategoryHierarchyUpdateInput = {
    depth?: IntFieldUpdateOperationsInput | number
    ancestor?: CategoryUpdateOneRequiredWithoutAncestorsNestedInput
    descendant?: CategoryUpdateOneRequiredWithoutDescendantsNestedInput
  }

  export type CategoryHierarchyUncheckedUpdateInput = {
    ancestorId?: StringFieldUpdateOperationsInput | string
    descendantId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryHierarchyCreateManyInput = {
    ancestorId: string
    descendantId: string
    depth: number
  }

  export type CategoryHierarchyUpdateManyMutationInput = {
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryHierarchyUncheckedUpdateManyInput = {
    ancestorId?: StringFieldUpdateOperationsInput | string
    descendantId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type ProductToCategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductToCategoryUncheckedCreateInput = {
    id?: string
    productId: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductToCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductToCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductToCategoryCreateManyInput = {
    id?: string
    productId: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductToCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductToCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductVideoListRelationFilter = {
    every?: ProductVideoWhereInput
    some?: ProductVideoWhereInput
    none?: ProductVideoWhereInput
  }

  export type ProductToCategoryListRelationFilter = {
    every?: ProductToCategoryWhereInput
    some?: ProductToCategoryWhereInput
    none?: ProductToCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductToCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    slug?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    quantity?: SortOrder
    keywords?: SortOrder
    richContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    slug?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    quantity?: SortOrder
    richContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    slug?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    quantity?: SortOrder
    richContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
    quantity?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    blurhash?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    blurhash?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    blurhash?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProductVideoCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    posterUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVideoAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProductVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    posterUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVideoMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    posterUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVideoSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryHierarchyListRelationFilter = {
    every?: CategoryHierarchyWhereInput
    some?: CategoryHierarchyWhereInput
    none?: CategoryHierarchyWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryHierarchyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryExternalIdMarketplaceIdCompoundUniqueInput = {
    externalId: string
    marketplaceId: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    marketplaceId?: SortOrder
    isDisabled?: SortOrder
    parentId?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    marketplaceId?: SortOrder
    isDisabled?: SortOrder
    parentId?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    marketplaceId?: SortOrder
    isDisabled?: SortOrder
    parentId?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CategoryHierarchyAncestorIdDescendantIdCompoundUniqueInput = {
    ancestorId: string
    descendantId: string
  }

  export type CategoryHierarchyCountOrderByAggregateInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
  }

  export type CategoryHierarchyAvgOrderByAggregateInput = {
    depth?: SortOrder
  }

  export type CategoryHierarchyMaxOrderByAggregateInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
  }

  export type CategoryHierarchyMinOrderByAggregateInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
  }

  export type CategoryHierarchySumOrderByAggregateInput = {
    depth?: SortOrder
  }

  export type ProductToCategoryProductIdCategoryIdCompoundUniqueInput = {
    productId: string
    categoryId: string
  }

  export type ProductToCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductToCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductToCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCreatekeywordsInput = {
    set: string[]
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductVideoCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVideoCreateWithoutProductInput, ProductVideoUncheckedCreateWithoutProductInput> | ProductVideoCreateWithoutProductInput[] | ProductVideoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVideoCreateOrConnectWithoutProductInput | ProductVideoCreateOrConnectWithoutProductInput[]
    createMany?: ProductVideoCreateManyProductInputEnvelope
    connect?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
  }

  export type ProductToCategoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductToCategoryCreateWithoutProductInput, ProductToCategoryUncheckedCreateWithoutProductInput> | ProductToCategoryCreateWithoutProductInput[] | ProductToCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductToCategoryCreateOrConnectWithoutProductInput | ProductToCategoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductToCategoryCreateManyProductInputEnvelope
    connect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductVideoUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVideoCreateWithoutProductInput, ProductVideoUncheckedCreateWithoutProductInput> | ProductVideoCreateWithoutProductInput[] | ProductVideoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVideoCreateOrConnectWithoutProductInput | ProductVideoCreateOrConnectWithoutProductInput[]
    createMany?: ProductVideoCreateManyProductInputEnvelope
    connect?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
  }

  export type ProductToCategoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductToCategoryCreateWithoutProductInput, ProductToCategoryUncheckedCreateWithoutProductInput> | ProductToCategoryCreateWithoutProductInput[] | ProductToCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductToCategoryCreateOrConnectWithoutProductInput | ProductToCategoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductToCategoryCreateManyProductInputEnvelope
    connect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductVideoUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVideoCreateWithoutProductInput, ProductVideoUncheckedCreateWithoutProductInput> | ProductVideoCreateWithoutProductInput[] | ProductVideoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVideoCreateOrConnectWithoutProductInput | ProductVideoCreateOrConnectWithoutProductInput[]
    upsert?: ProductVideoUpsertWithWhereUniqueWithoutProductInput | ProductVideoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVideoCreateManyProductInputEnvelope
    set?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
    disconnect?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
    delete?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
    connect?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
    update?: ProductVideoUpdateWithWhereUniqueWithoutProductInput | ProductVideoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVideoUpdateManyWithWhereWithoutProductInput | ProductVideoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVideoScalarWhereInput | ProductVideoScalarWhereInput[]
  }

  export type ProductToCategoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductToCategoryCreateWithoutProductInput, ProductToCategoryUncheckedCreateWithoutProductInput> | ProductToCategoryCreateWithoutProductInput[] | ProductToCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductToCategoryCreateOrConnectWithoutProductInput | ProductToCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductToCategoryUpsertWithWhereUniqueWithoutProductInput | ProductToCategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductToCategoryCreateManyProductInputEnvelope
    set?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    disconnect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    delete?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    connect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    update?: ProductToCategoryUpdateWithWhereUniqueWithoutProductInput | ProductToCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductToCategoryUpdateManyWithWhereWithoutProductInput | ProductToCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductToCategoryScalarWhereInput | ProductToCategoryScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductVideoUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVideoCreateWithoutProductInput, ProductVideoUncheckedCreateWithoutProductInput> | ProductVideoCreateWithoutProductInput[] | ProductVideoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVideoCreateOrConnectWithoutProductInput | ProductVideoCreateOrConnectWithoutProductInput[]
    upsert?: ProductVideoUpsertWithWhereUniqueWithoutProductInput | ProductVideoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVideoCreateManyProductInputEnvelope
    set?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
    disconnect?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
    delete?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
    connect?: ProductVideoWhereUniqueInput | ProductVideoWhereUniqueInput[]
    update?: ProductVideoUpdateWithWhereUniqueWithoutProductInput | ProductVideoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVideoUpdateManyWithWhereWithoutProductInput | ProductVideoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVideoScalarWhereInput | ProductVideoScalarWhereInput[]
  }

  export type ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductToCategoryCreateWithoutProductInput, ProductToCategoryUncheckedCreateWithoutProductInput> | ProductToCategoryCreateWithoutProductInput[] | ProductToCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductToCategoryCreateOrConnectWithoutProductInput | ProductToCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductToCategoryUpsertWithWhereUniqueWithoutProductInput | ProductToCategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductToCategoryCreateManyProductInputEnvelope
    set?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    disconnect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    delete?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    connect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    update?: ProductToCategoryUpdateWithWhereUniqueWithoutProductInput | ProductToCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductToCategoryUpdateManyWithWhereWithoutProductInput | ProductToCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductToCategoryScalarWhereInput | ProductToCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductImageInput = {
    create?: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImageInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductImageNestedInput = {
    create?: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImageInput
    upsert?: ProductUpsertWithoutProductImageInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductImageInput, ProductUpdateWithoutProductImageInput>, ProductUncheckedUpdateWithoutProductImageInput>
  }

  export type ProductCreateNestedOneWithoutProductVideoInput = {
    create?: XOR<ProductCreateWithoutProductVideoInput, ProductUncheckedCreateWithoutProductVideoInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVideoInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductVideoNestedInput = {
    create?: XOR<ProductCreateWithoutProductVideoInput, ProductUncheckedCreateWithoutProductVideoInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVideoInput
    upsert?: ProductUpsertWithoutProductVideoInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductVideoInput, ProductUpdateWithoutProductVideoInput>, ProductUncheckedUpdateWithoutProductVideoInput>
  }

  export type CategoryCreateNestedOneWithoutChildCategoriesInput = {
    create?: XOR<CategoryCreateWithoutChildCategoriesInput, CategoryUncheckedCreateWithoutChildCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentCategoryInput = {
    create?: XOR<CategoryCreateWithoutParentCategoryInput, CategoryUncheckedCreateWithoutParentCategoryInput> | CategoryCreateWithoutParentCategoryInput[] | CategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentCategoryInput | CategoryCreateOrConnectWithoutParentCategoryInput[]
    createMany?: CategoryCreateManyParentCategoryInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductToCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductToCategoryCreateWithoutCategoryInput, ProductToCategoryUncheckedCreateWithoutCategoryInput> | ProductToCategoryCreateWithoutCategoryInput[] | ProductToCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductToCategoryCreateOrConnectWithoutCategoryInput | ProductToCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductToCategoryCreateManyCategoryInputEnvelope
    connect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
  }

  export type CategoryHierarchyCreateNestedManyWithoutAncestorInput = {
    create?: XOR<CategoryHierarchyCreateWithoutAncestorInput, CategoryHierarchyUncheckedCreateWithoutAncestorInput> | CategoryHierarchyCreateWithoutAncestorInput[] | CategoryHierarchyUncheckedCreateWithoutAncestorInput[]
    connectOrCreate?: CategoryHierarchyCreateOrConnectWithoutAncestorInput | CategoryHierarchyCreateOrConnectWithoutAncestorInput[]
    createMany?: CategoryHierarchyCreateManyAncestorInputEnvelope
    connect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
  }

  export type CategoryHierarchyCreateNestedManyWithoutDescendantInput = {
    create?: XOR<CategoryHierarchyCreateWithoutDescendantInput, CategoryHierarchyUncheckedCreateWithoutDescendantInput> | CategoryHierarchyCreateWithoutDescendantInput[] | CategoryHierarchyUncheckedCreateWithoutDescendantInput[]
    connectOrCreate?: CategoryHierarchyCreateOrConnectWithoutDescendantInput | CategoryHierarchyCreateOrConnectWithoutDescendantInput[]
    createMany?: CategoryHierarchyCreateManyDescendantInputEnvelope
    connect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentCategoryInput = {
    create?: XOR<CategoryCreateWithoutParentCategoryInput, CategoryUncheckedCreateWithoutParentCategoryInput> | CategoryCreateWithoutParentCategoryInput[] | CategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentCategoryInput | CategoryCreateOrConnectWithoutParentCategoryInput[]
    createMany?: CategoryCreateManyParentCategoryInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductToCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductToCategoryCreateWithoutCategoryInput, ProductToCategoryUncheckedCreateWithoutCategoryInput> | ProductToCategoryCreateWithoutCategoryInput[] | ProductToCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductToCategoryCreateOrConnectWithoutCategoryInput | ProductToCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductToCategoryCreateManyCategoryInputEnvelope
    connect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
  }

  export type CategoryHierarchyUncheckedCreateNestedManyWithoutAncestorInput = {
    create?: XOR<CategoryHierarchyCreateWithoutAncestorInput, CategoryHierarchyUncheckedCreateWithoutAncestorInput> | CategoryHierarchyCreateWithoutAncestorInput[] | CategoryHierarchyUncheckedCreateWithoutAncestorInput[]
    connectOrCreate?: CategoryHierarchyCreateOrConnectWithoutAncestorInput | CategoryHierarchyCreateOrConnectWithoutAncestorInput[]
    createMany?: CategoryHierarchyCreateManyAncestorInputEnvelope
    connect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
  }

  export type CategoryHierarchyUncheckedCreateNestedManyWithoutDescendantInput = {
    create?: XOR<CategoryHierarchyCreateWithoutDescendantInput, CategoryHierarchyUncheckedCreateWithoutDescendantInput> | CategoryHierarchyCreateWithoutDescendantInput[] | CategoryHierarchyUncheckedCreateWithoutDescendantInput[]
    connectOrCreate?: CategoryHierarchyCreateOrConnectWithoutDescendantInput | CategoryHierarchyCreateOrConnectWithoutDescendantInput[]
    createMany?: CategoryHierarchyCreateManyDescendantInputEnvelope
    connect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoryUpdateOneWithoutChildCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutChildCategoriesInput, CategoryUncheckedCreateWithoutChildCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildCategoriesInput
    upsert?: CategoryUpsertWithoutChildCategoriesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildCategoriesInput, CategoryUpdateWithoutChildCategoriesInput>, CategoryUncheckedUpdateWithoutChildCategoriesInput>
  }

  export type CategoryUpdateManyWithoutParentCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutParentCategoryInput, CategoryUncheckedCreateWithoutParentCategoryInput> | CategoryCreateWithoutParentCategoryInput[] | CategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentCategoryInput | CategoryCreateOrConnectWithoutParentCategoryInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentCategoryInput | CategoryUpsertWithWhereUniqueWithoutParentCategoryInput[]
    createMany?: CategoryCreateManyParentCategoryInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentCategoryInput | CategoryUpdateWithWhereUniqueWithoutParentCategoryInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentCategoryInput | CategoryUpdateManyWithWhereWithoutParentCategoryInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductToCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductToCategoryCreateWithoutCategoryInput, ProductToCategoryUncheckedCreateWithoutCategoryInput> | ProductToCategoryCreateWithoutCategoryInput[] | ProductToCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductToCategoryCreateOrConnectWithoutCategoryInput | ProductToCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductToCategoryCreateManyCategoryInputEnvelope
    set?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    disconnect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    delete?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    connect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    update?: ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductToCategoryUpdateManyWithWhereWithoutCategoryInput | ProductToCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductToCategoryScalarWhereInput | ProductToCategoryScalarWhereInput[]
  }

  export type CategoryHierarchyUpdateManyWithoutAncestorNestedInput = {
    create?: XOR<CategoryHierarchyCreateWithoutAncestorInput, CategoryHierarchyUncheckedCreateWithoutAncestorInput> | CategoryHierarchyCreateWithoutAncestorInput[] | CategoryHierarchyUncheckedCreateWithoutAncestorInput[]
    connectOrCreate?: CategoryHierarchyCreateOrConnectWithoutAncestorInput | CategoryHierarchyCreateOrConnectWithoutAncestorInput[]
    upsert?: CategoryHierarchyUpsertWithWhereUniqueWithoutAncestorInput | CategoryHierarchyUpsertWithWhereUniqueWithoutAncestorInput[]
    createMany?: CategoryHierarchyCreateManyAncestorInputEnvelope
    set?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    disconnect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    delete?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    connect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    update?: CategoryHierarchyUpdateWithWhereUniqueWithoutAncestorInput | CategoryHierarchyUpdateWithWhereUniqueWithoutAncestorInput[]
    updateMany?: CategoryHierarchyUpdateManyWithWhereWithoutAncestorInput | CategoryHierarchyUpdateManyWithWhereWithoutAncestorInput[]
    deleteMany?: CategoryHierarchyScalarWhereInput | CategoryHierarchyScalarWhereInput[]
  }

  export type CategoryHierarchyUpdateManyWithoutDescendantNestedInput = {
    create?: XOR<CategoryHierarchyCreateWithoutDescendantInput, CategoryHierarchyUncheckedCreateWithoutDescendantInput> | CategoryHierarchyCreateWithoutDescendantInput[] | CategoryHierarchyUncheckedCreateWithoutDescendantInput[]
    connectOrCreate?: CategoryHierarchyCreateOrConnectWithoutDescendantInput | CategoryHierarchyCreateOrConnectWithoutDescendantInput[]
    upsert?: CategoryHierarchyUpsertWithWhereUniqueWithoutDescendantInput | CategoryHierarchyUpsertWithWhereUniqueWithoutDescendantInput[]
    createMany?: CategoryHierarchyCreateManyDescendantInputEnvelope
    set?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    disconnect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    delete?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    connect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    update?: CategoryHierarchyUpdateWithWhereUniqueWithoutDescendantInput | CategoryHierarchyUpdateWithWhereUniqueWithoutDescendantInput[]
    updateMany?: CategoryHierarchyUpdateManyWithWhereWithoutDescendantInput | CategoryHierarchyUpdateManyWithWhereWithoutDescendantInput[]
    deleteMany?: CategoryHierarchyScalarWhereInput | CategoryHierarchyScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutParentCategoryInput, CategoryUncheckedCreateWithoutParentCategoryInput> | CategoryCreateWithoutParentCategoryInput[] | CategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentCategoryInput | CategoryCreateOrConnectWithoutParentCategoryInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentCategoryInput | CategoryUpsertWithWhereUniqueWithoutParentCategoryInput[]
    createMany?: CategoryCreateManyParentCategoryInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentCategoryInput | CategoryUpdateWithWhereUniqueWithoutParentCategoryInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentCategoryInput | CategoryUpdateManyWithWhereWithoutParentCategoryInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductToCategoryCreateWithoutCategoryInput, ProductToCategoryUncheckedCreateWithoutCategoryInput> | ProductToCategoryCreateWithoutCategoryInput[] | ProductToCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductToCategoryCreateOrConnectWithoutCategoryInput | ProductToCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductToCategoryCreateManyCategoryInputEnvelope
    set?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    disconnect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    delete?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    connect?: ProductToCategoryWhereUniqueInput | ProductToCategoryWhereUniqueInput[]
    update?: ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductToCategoryUpdateManyWithWhereWithoutCategoryInput | ProductToCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductToCategoryScalarWhereInput | ProductToCategoryScalarWhereInput[]
  }

  export type CategoryHierarchyUncheckedUpdateManyWithoutAncestorNestedInput = {
    create?: XOR<CategoryHierarchyCreateWithoutAncestorInput, CategoryHierarchyUncheckedCreateWithoutAncestorInput> | CategoryHierarchyCreateWithoutAncestorInput[] | CategoryHierarchyUncheckedCreateWithoutAncestorInput[]
    connectOrCreate?: CategoryHierarchyCreateOrConnectWithoutAncestorInput | CategoryHierarchyCreateOrConnectWithoutAncestorInput[]
    upsert?: CategoryHierarchyUpsertWithWhereUniqueWithoutAncestorInput | CategoryHierarchyUpsertWithWhereUniqueWithoutAncestorInput[]
    createMany?: CategoryHierarchyCreateManyAncestorInputEnvelope
    set?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    disconnect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    delete?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    connect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    update?: CategoryHierarchyUpdateWithWhereUniqueWithoutAncestorInput | CategoryHierarchyUpdateWithWhereUniqueWithoutAncestorInput[]
    updateMany?: CategoryHierarchyUpdateManyWithWhereWithoutAncestorInput | CategoryHierarchyUpdateManyWithWhereWithoutAncestorInput[]
    deleteMany?: CategoryHierarchyScalarWhereInput | CategoryHierarchyScalarWhereInput[]
  }

  export type CategoryHierarchyUncheckedUpdateManyWithoutDescendantNestedInput = {
    create?: XOR<CategoryHierarchyCreateWithoutDescendantInput, CategoryHierarchyUncheckedCreateWithoutDescendantInput> | CategoryHierarchyCreateWithoutDescendantInput[] | CategoryHierarchyUncheckedCreateWithoutDescendantInput[]
    connectOrCreate?: CategoryHierarchyCreateOrConnectWithoutDescendantInput | CategoryHierarchyCreateOrConnectWithoutDescendantInput[]
    upsert?: CategoryHierarchyUpsertWithWhereUniqueWithoutDescendantInput | CategoryHierarchyUpsertWithWhereUniqueWithoutDescendantInput[]
    createMany?: CategoryHierarchyCreateManyDescendantInputEnvelope
    set?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    disconnect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    delete?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    connect?: CategoryHierarchyWhereUniqueInput | CategoryHierarchyWhereUniqueInput[]
    update?: CategoryHierarchyUpdateWithWhereUniqueWithoutDescendantInput | CategoryHierarchyUpdateWithWhereUniqueWithoutDescendantInput[]
    updateMany?: CategoryHierarchyUpdateManyWithWhereWithoutDescendantInput | CategoryHierarchyUpdateManyWithWhereWithoutDescendantInput[]
    deleteMany?: CategoryHierarchyScalarWhereInput | CategoryHierarchyScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutAncestorsInput = {
    create?: XOR<CategoryCreateWithoutAncestorsInput, CategoryUncheckedCreateWithoutAncestorsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAncestorsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutDescendantsInput = {
    create?: XOR<CategoryCreateWithoutDescendantsInput, CategoryUncheckedCreateWithoutDescendantsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDescendantsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutAncestorsNestedInput = {
    create?: XOR<CategoryCreateWithoutAncestorsInput, CategoryUncheckedCreateWithoutAncestorsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAncestorsInput
    upsert?: CategoryUpsertWithoutAncestorsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAncestorsInput, CategoryUpdateWithoutAncestorsInput>, CategoryUncheckedUpdateWithoutAncestorsInput>
  }

  export type CategoryUpdateOneRequiredWithoutDescendantsNestedInput = {
    create?: XOR<CategoryCreateWithoutDescendantsInput, CategoryUncheckedCreateWithoutDescendantsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDescendantsInput
    upsert?: CategoryUpsertWithoutDescendantsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDescendantsInput, CategoryUpdateWithoutDescendantsInput>, CategoryUncheckedUpdateWithoutDescendantsInput>
  }

  export type ProductCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    upsert?: ProductUpsertWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCategoriesInput, ProductUpdateWithoutCategoriesInput>, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductImageCreateWithoutProductInput = {
    id?: string
    url: string
    blurhash: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    blurhash: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVideoCreateWithoutProductInput = {
    id?: string
    url: string
    posterUrl: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVideoUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    posterUrl: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVideoCreateOrConnectWithoutProductInput = {
    where: ProductVideoWhereUniqueInput
    create: XOR<ProductVideoCreateWithoutProductInput, ProductVideoUncheckedCreateWithoutProductInput>
  }

  export type ProductVideoCreateManyProductInputEnvelope = {
    data: ProductVideoCreateManyProductInput | ProductVideoCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductToCategoryCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductToCategoryUncheckedCreateWithoutProductInput = {
    id?: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductToCategoryCreateOrConnectWithoutProductInput = {
    where: ProductToCategoryWhereUniqueInput
    create: XOR<ProductToCategoryCreateWithoutProductInput, ProductToCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductToCategoryCreateManyProductInputEnvelope = {
    data: ProductToCategoryCreateManyProductInput | ProductToCategoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    blurhash?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    updatedAt?: DateTimeFilter<"ProductImage"> | Date | string
  }

  export type ProductVideoUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVideoWhereUniqueInput
    update: XOR<ProductVideoUpdateWithoutProductInput, ProductVideoUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVideoCreateWithoutProductInput, ProductVideoUncheckedCreateWithoutProductInput>
  }

  export type ProductVideoUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVideoWhereUniqueInput
    data: XOR<ProductVideoUpdateWithoutProductInput, ProductVideoUncheckedUpdateWithoutProductInput>
  }

  export type ProductVideoUpdateManyWithWhereWithoutProductInput = {
    where: ProductVideoScalarWhereInput
    data: XOR<ProductVideoUpdateManyMutationInput, ProductVideoUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVideoScalarWhereInput = {
    AND?: ProductVideoScalarWhereInput | ProductVideoScalarWhereInput[]
    OR?: ProductVideoScalarWhereInput[]
    NOT?: ProductVideoScalarWhereInput | ProductVideoScalarWhereInput[]
    id?: StringFilter<"ProductVideo"> | string
    productId?: StringFilter<"ProductVideo"> | string
    url?: StringFilter<"ProductVideo"> | string
    posterUrl?: StringFilter<"ProductVideo"> | string
    order?: IntFilter<"ProductVideo"> | number
    createdAt?: DateTimeFilter<"ProductVideo"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVideo"> | Date | string
  }

  export type ProductToCategoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductToCategoryWhereUniqueInput
    update: XOR<ProductToCategoryUpdateWithoutProductInput, ProductToCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductToCategoryCreateWithoutProductInput, ProductToCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductToCategoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductToCategoryWhereUniqueInput
    data: XOR<ProductToCategoryUpdateWithoutProductInput, ProductToCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductToCategoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductToCategoryScalarWhereInput
    data: XOR<ProductToCategoryUpdateManyMutationInput, ProductToCategoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductToCategoryScalarWhereInput = {
    AND?: ProductToCategoryScalarWhereInput | ProductToCategoryScalarWhereInput[]
    OR?: ProductToCategoryScalarWhereInput[]
    NOT?: ProductToCategoryScalarWhereInput | ProductToCategoryScalarWhereInput[]
    id?: StringFilter<"ProductToCategory"> | string
    productId?: StringFilter<"ProductToCategory"> | string
    categoryId?: StringFilter<"ProductToCategory"> | string
    createdAt?: DateTimeFilter<"ProductToCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductToCategory"> | Date | string
  }

  export type ProductCreateWithoutProductImageInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductVideo?: ProductVideoCreateNestedManyWithoutProductInput
    categories?: ProductToCategoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductImageInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductVideo?: ProductVideoUncheckedCreateNestedManyWithoutProductInput
    categories?: ProductToCategoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductImageInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
  }

  export type ProductUpsertWithoutProductImageInput = {
    update: XOR<ProductUpdateWithoutProductImageInput, ProductUncheckedUpdateWithoutProductImageInput>
    create: XOR<ProductCreateWithoutProductImageInput, ProductUncheckedCreateWithoutProductImageInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductImageInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductImageInput, ProductUncheckedUpdateWithoutProductImageInput>
  }

  export type ProductUpdateWithoutProductImageInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductVideo?: ProductVideoUpdateManyWithoutProductNestedInput
    categories?: ProductToCategoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductImageInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductVideo?: ProductVideoUncheckedUpdateManyWithoutProductNestedInput
    categories?: ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutProductVideoInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
    categories?: ProductToCategoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductVideoInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    categories?: ProductToCategoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductVideoInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductVideoInput, ProductUncheckedCreateWithoutProductVideoInput>
  }

  export type ProductUpsertWithoutProductVideoInput = {
    update: XOR<ProductUpdateWithoutProductVideoInput, ProductUncheckedUpdateWithoutProductVideoInput>
    create: XOR<ProductCreateWithoutProductVideoInput, ProductUncheckedCreateWithoutProductVideoInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductVideoInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductVideoInput, ProductUncheckedUpdateWithoutProductVideoInput>
  }

  export type ProductUpdateWithoutProductVideoInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
    categories?: ProductToCategoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductVideoInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    categories?: ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryCreateWithoutChildCategoriesInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: CategoryCreateNestedOneWithoutChildCategoriesInput
    products?: ProductToCategoryCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryHierarchyCreateNestedManyWithoutAncestorInput
    descendants?: CategoryHierarchyCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUncheckedCreateWithoutChildCategoriesInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    parentId?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductToCategoryUncheckedCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryHierarchyUncheckedCreateNestedManyWithoutAncestorInput
    descendants?: CategoryHierarchyUncheckedCreateNestedManyWithoutDescendantInput
  }

  export type CategoryCreateOrConnectWithoutChildCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildCategoriesInput, CategoryUncheckedCreateWithoutChildCategoriesInput>
  }

  export type CategoryCreateWithoutParentCategoryInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childCategories?: CategoryCreateNestedManyWithoutParentCategoryInput
    products?: ProductToCategoryCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryHierarchyCreateNestedManyWithoutAncestorInput
    descendants?: CategoryHierarchyCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUncheckedCreateWithoutParentCategoryInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childCategories?: CategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    products?: ProductToCategoryUncheckedCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryHierarchyUncheckedCreateNestedManyWithoutAncestorInput
    descendants?: CategoryHierarchyUncheckedCreateNestedManyWithoutDescendantInput
  }

  export type CategoryCreateOrConnectWithoutParentCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentCategoryInput, CategoryUncheckedCreateWithoutParentCategoryInput>
  }

  export type CategoryCreateManyParentCategoryInputEnvelope = {
    data: CategoryCreateManyParentCategoryInput | CategoryCreateManyParentCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductToCategoryCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCategoriesInput
  }

  export type ProductToCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductToCategoryCreateOrConnectWithoutCategoryInput = {
    where: ProductToCategoryWhereUniqueInput
    create: XOR<ProductToCategoryCreateWithoutCategoryInput, ProductToCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProductToCategoryCreateManyCategoryInputEnvelope = {
    data: ProductToCategoryCreateManyCategoryInput | ProductToCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryHierarchyCreateWithoutAncestorInput = {
    depth: number
    descendant: CategoryCreateNestedOneWithoutDescendantsInput
  }

  export type CategoryHierarchyUncheckedCreateWithoutAncestorInput = {
    descendantId: string
    depth: number
  }

  export type CategoryHierarchyCreateOrConnectWithoutAncestorInput = {
    where: CategoryHierarchyWhereUniqueInput
    create: XOR<CategoryHierarchyCreateWithoutAncestorInput, CategoryHierarchyUncheckedCreateWithoutAncestorInput>
  }

  export type CategoryHierarchyCreateManyAncestorInputEnvelope = {
    data: CategoryHierarchyCreateManyAncestorInput | CategoryHierarchyCreateManyAncestorInput[]
    skipDuplicates?: boolean
  }

  export type CategoryHierarchyCreateWithoutDescendantInput = {
    depth: number
    ancestor: CategoryCreateNestedOneWithoutAncestorsInput
  }

  export type CategoryHierarchyUncheckedCreateWithoutDescendantInput = {
    ancestorId: string
    depth: number
  }

  export type CategoryHierarchyCreateOrConnectWithoutDescendantInput = {
    where: CategoryHierarchyWhereUniqueInput
    create: XOR<CategoryHierarchyCreateWithoutDescendantInput, CategoryHierarchyUncheckedCreateWithoutDescendantInput>
  }

  export type CategoryHierarchyCreateManyDescendantInputEnvelope = {
    data: CategoryHierarchyCreateManyDescendantInput | CategoryHierarchyCreateManyDescendantInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutChildCategoriesInput = {
    update: XOR<CategoryUpdateWithoutChildCategoriesInput, CategoryUncheckedUpdateWithoutChildCategoriesInput>
    create: XOR<CategoryCreateWithoutChildCategoriesInput, CategoryUncheckedCreateWithoutChildCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildCategoriesInput, CategoryUncheckedUpdateWithoutChildCategoriesInput>
  }

  export type CategoryUpdateWithoutChildCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: CategoryUpdateOneWithoutChildCategoriesNestedInput
    products?: ProductToCategoryUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryHierarchyUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryHierarchyUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryHierarchyUncheckedUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryHierarchyUncheckedUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentCategoryInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentCategoryInput, CategoryUncheckedUpdateWithoutParentCategoryInput>
    create: XOR<CategoryCreateWithoutParentCategoryInput, CategoryUncheckedCreateWithoutParentCategoryInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentCategoryInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentCategoryInput, CategoryUncheckedUpdateWithoutParentCategoryInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentCategoryInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentCategoryInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    externalId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    marketplaceId?: StringFilter<"Category"> | string
    isDisabled?: BoolFilter<"Category"> | boolean
    parentId?: StringNullableFilter<"Category"> | string | null
    level?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductToCategoryWhereUniqueInput
    update: XOR<ProductToCategoryUpdateWithoutCategoryInput, ProductToCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductToCategoryCreateWithoutCategoryInput, ProductToCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductToCategoryWhereUniqueInput
    data: XOR<ProductToCategoryUpdateWithoutCategoryInput, ProductToCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductToCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductToCategoryScalarWhereInput
    data: XOR<ProductToCategoryUpdateManyMutationInput, ProductToCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryHierarchyUpsertWithWhereUniqueWithoutAncestorInput = {
    where: CategoryHierarchyWhereUniqueInput
    update: XOR<CategoryHierarchyUpdateWithoutAncestorInput, CategoryHierarchyUncheckedUpdateWithoutAncestorInput>
    create: XOR<CategoryHierarchyCreateWithoutAncestorInput, CategoryHierarchyUncheckedCreateWithoutAncestorInput>
  }

  export type CategoryHierarchyUpdateWithWhereUniqueWithoutAncestorInput = {
    where: CategoryHierarchyWhereUniqueInput
    data: XOR<CategoryHierarchyUpdateWithoutAncestorInput, CategoryHierarchyUncheckedUpdateWithoutAncestorInput>
  }

  export type CategoryHierarchyUpdateManyWithWhereWithoutAncestorInput = {
    where: CategoryHierarchyScalarWhereInput
    data: XOR<CategoryHierarchyUpdateManyMutationInput, CategoryHierarchyUncheckedUpdateManyWithoutAncestorInput>
  }

  export type CategoryHierarchyScalarWhereInput = {
    AND?: CategoryHierarchyScalarWhereInput | CategoryHierarchyScalarWhereInput[]
    OR?: CategoryHierarchyScalarWhereInput[]
    NOT?: CategoryHierarchyScalarWhereInput | CategoryHierarchyScalarWhereInput[]
    ancestorId?: StringFilter<"CategoryHierarchy"> | string
    descendantId?: StringFilter<"CategoryHierarchy"> | string
    depth?: IntFilter<"CategoryHierarchy"> | number
  }

  export type CategoryHierarchyUpsertWithWhereUniqueWithoutDescendantInput = {
    where: CategoryHierarchyWhereUniqueInput
    update: XOR<CategoryHierarchyUpdateWithoutDescendantInput, CategoryHierarchyUncheckedUpdateWithoutDescendantInput>
    create: XOR<CategoryHierarchyCreateWithoutDescendantInput, CategoryHierarchyUncheckedCreateWithoutDescendantInput>
  }

  export type CategoryHierarchyUpdateWithWhereUniqueWithoutDescendantInput = {
    where: CategoryHierarchyWhereUniqueInput
    data: XOR<CategoryHierarchyUpdateWithoutDescendantInput, CategoryHierarchyUncheckedUpdateWithoutDescendantInput>
  }

  export type CategoryHierarchyUpdateManyWithWhereWithoutDescendantInput = {
    where: CategoryHierarchyScalarWhereInput
    data: XOR<CategoryHierarchyUpdateManyMutationInput, CategoryHierarchyUncheckedUpdateManyWithoutDescendantInput>
  }

  export type CategoryCreateWithoutAncestorsInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: CategoryCreateNestedOneWithoutChildCategoriesInput
    childCategories?: CategoryCreateNestedManyWithoutParentCategoryInput
    products?: ProductToCategoryCreateNestedManyWithoutCategoryInput
    descendants?: CategoryHierarchyCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUncheckedCreateWithoutAncestorsInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    parentId?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childCategories?: CategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    products?: ProductToCategoryUncheckedCreateNestedManyWithoutCategoryInput
    descendants?: CategoryHierarchyUncheckedCreateNestedManyWithoutDescendantInput
  }

  export type CategoryCreateOrConnectWithoutAncestorsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAncestorsInput, CategoryUncheckedCreateWithoutAncestorsInput>
  }

  export type CategoryCreateWithoutDescendantsInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: CategoryCreateNestedOneWithoutChildCategoriesInput
    childCategories?: CategoryCreateNestedManyWithoutParentCategoryInput
    products?: ProductToCategoryCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryHierarchyCreateNestedManyWithoutAncestorInput
  }

  export type CategoryUncheckedCreateWithoutDescendantsInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    parentId?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childCategories?: CategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    products?: ProductToCategoryUncheckedCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryHierarchyUncheckedCreateNestedManyWithoutAncestorInput
  }

  export type CategoryCreateOrConnectWithoutDescendantsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDescendantsInput, CategoryUncheckedCreateWithoutDescendantsInput>
  }

  export type CategoryUpsertWithoutAncestorsInput = {
    update: XOR<CategoryUpdateWithoutAncestorsInput, CategoryUncheckedUpdateWithoutAncestorsInput>
    create: XOR<CategoryCreateWithoutAncestorsInput, CategoryUncheckedCreateWithoutAncestorsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAncestorsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAncestorsInput, CategoryUncheckedUpdateWithoutAncestorsInput>
  }

  export type CategoryUpdateWithoutAncestorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: CategoryUpdateOneWithoutChildCategoriesNestedInput
    childCategories?: CategoryUpdateManyWithoutParentCategoryNestedInput
    products?: ProductToCategoryUpdateManyWithoutCategoryNestedInput
    descendants?: CategoryHierarchyUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAncestorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCategories?: CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    products?: ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    descendants?: CategoryHierarchyUncheckedUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUpsertWithoutDescendantsInput = {
    update: XOR<CategoryUpdateWithoutDescendantsInput, CategoryUncheckedUpdateWithoutDescendantsInput>
    create: XOR<CategoryCreateWithoutDescendantsInput, CategoryUncheckedCreateWithoutDescendantsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutDescendantsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutDescendantsInput, CategoryUncheckedUpdateWithoutDescendantsInput>
  }

  export type CategoryUpdateWithoutDescendantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: CategoryUpdateOneWithoutChildCategoriesNestedInput
    childCategories?: CategoryUpdateManyWithoutParentCategoryNestedInput
    products?: ProductToCategoryUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryHierarchyUpdateManyWithoutAncestorNestedInput
  }

  export type CategoryUncheckedUpdateWithoutDescendantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCategories?: CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    products?: ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryHierarchyUncheckedUpdateManyWithoutAncestorNestedInput
  }

  export type ProductCreateWithoutCategoriesInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductImage?: ProductImageCreateNestedManyWithoutProductInput
    ProductVideo?: ProductVideoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoriesInput = {
    slug?: string
    externalId?: string | null
    name: string
    description: string
    price?: number
    discount?: number
    quantity?: number
    keywords?: ProductCreatekeywordsInput | string[]
    richContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductImage?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    ProductVideo?: ProductVideoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: CategoryCreateNestedOneWithoutChildCategoriesInput
    childCategories?: CategoryCreateNestedManyWithoutParentCategoryInput
    ancestors?: CategoryHierarchyCreateNestedManyWithoutAncestorInput
    descendants?: CategoryHierarchyCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    parentId?: string | null
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childCategories?: CategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    ancestors?: CategoryHierarchyUncheckedCreateNestedManyWithoutAncestorInput
    descendants?: CategoryHierarchyUncheckedCreateNestedManyWithoutDescendantInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutCategoriesInput = {
    update: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateWithoutCategoriesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductImage?: ProductImageUpdateManyWithoutProductNestedInput
    ProductVideo?: ProductVideoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoriesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    keywords?: ProductUpdatekeywordsInput | string[]
    richContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductImage?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    ProductVideo?: ProductVideoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: CategoryUpdateOneWithoutChildCategoriesNestedInput
    childCategories?: CategoryUpdateManyWithoutParentCategoryNestedInput
    ancestors?: CategoryHierarchyUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryHierarchyUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCategories?: CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    ancestors?: CategoryHierarchyUncheckedUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryHierarchyUncheckedUpdateManyWithoutDescendantNestedInput
  }

  export type ProductImageCreateManyProductInput = {
    id?: string
    url: string
    blurhash: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVideoCreateManyProductInput = {
    id?: string
    url: string
    posterUrl: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductToCategoryCreateManyProductInput = {
    id?: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blurhash?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blurhash?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blurhash?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVideoUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVideoUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVideoUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductToCategoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductToCategoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductToCategoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyParentCategoryInput = {
    id?: string
    externalId: string
    name: string
    marketplaceId: string
    isDisabled?: boolean
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductToCategoryCreateManyCategoryInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryHierarchyCreateManyAncestorInput = {
    descendantId: string
    depth: number
  }

  export type CategoryHierarchyCreateManyDescendantInput = {
    ancestorId: string
    depth: number
  }

  export type CategoryUpdateWithoutParentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCategories?: CategoryUpdateManyWithoutParentCategoryNestedInput
    products?: ProductToCategoryUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryHierarchyUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryHierarchyUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCategories?: CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    products?: ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryHierarchyUncheckedUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryHierarchyUncheckedUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketplaceId?: StringFieldUpdateOperationsInput | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductToCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type ProductToCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductToCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryHierarchyUpdateWithoutAncestorInput = {
    depth?: IntFieldUpdateOperationsInput | number
    descendant?: CategoryUpdateOneRequiredWithoutDescendantsNestedInput
  }

  export type CategoryHierarchyUncheckedUpdateWithoutAncestorInput = {
    descendantId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryHierarchyUncheckedUpdateManyWithoutAncestorInput = {
    descendantId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryHierarchyUpdateWithoutDescendantInput = {
    depth?: IntFieldUpdateOperationsInput | number
    ancestor?: CategoryUpdateOneRequiredWithoutAncestorsNestedInput
  }

  export type CategoryHierarchyUncheckedUpdateWithoutDescendantInput = {
    ancestorId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryHierarchyUncheckedUpdateManyWithoutDescendantInput = {
    ancestorId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}