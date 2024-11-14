
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
 * Model carrinhos
 * 
 */
export type carrinhos = $Result.DefaultSelection<Prisma.$carrinhosPayload>
/**
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model pedidos
 * 
 */
export type pedidos = $Result.DefaultSelection<Prisma.$pedidosPayload>
/**
 * Model produtos
 * 
 */
export type produtos = $Result.DefaultSelection<Prisma.$produtosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carrinhos
 * const carrinhos = await prisma.carrinhos.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Carrinhos
   * const carrinhos = await prisma.carrinhos.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.carrinhos`: Exposes CRUD operations for the **carrinhos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carrinhos
    * const carrinhos = await prisma.carrinhos.findMany()
    * ```
    */
  get carrinhos(): Prisma.carrinhosDelegate<ExtArgs>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs>;

  /**
   * `prisma.pedidos`: Exposes CRUD operations for the **pedidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedidos.findMany()
    * ```
    */
  get pedidos(): Prisma.pedidosDelegate<ExtArgs>;

  /**
   * `prisma.produtos`: Exposes CRUD operations for the **produtos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produtos.findMany()
    * ```
    */
  get produtos(): Prisma.produtosDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    carrinhos: 'carrinhos',
    clientes: 'clientes',
    pedidos: 'pedidos',
    produtos: 'produtos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'carrinhos' | 'clientes' | 'pedidos' | 'produtos'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      carrinhos: {
        payload: Prisma.$carrinhosPayload<ExtArgs>
        fields: Prisma.carrinhosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carrinhosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carrinhosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload>
          }
          findFirst: {
            args: Prisma.carrinhosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carrinhosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload>
          }
          findMany: {
            args: Prisma.carrinhosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload>[]
          }
          create: {
            args: Prisma.carrinhosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload>
          }
          createMany: {
            args: Prisma.carrinhosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.carrinhosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload>
          }
          update: {
            args: Prisma.carrinhosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload>
          }
          deleteMany: {
            args: Prisma.carrinhosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.carrinhosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.carrinhosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$carrinhosPayload>
          }
          aggregate: {
            args: Prisma.CarrinhosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarrinhos>
          }
          groupBy: {
            args: Prisma.carrinhosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarrinhosGroupByOutputType>[]
          }
          count: {
            args: Prisma.carrinhosCountArgs<ExtArgs>,
            result: $Utils.Optional<CarrinhosCountAggregateOutputType> | number
          }
        }
      }
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      pedidos: {
        payload: Prisma.$pedidosPayload<ExtArgs>
        fields: Prisma.pedidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          findFirst: {
            args: Prisma.pedidosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          findMany: {
            args: Prisma.pedidosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>[]
          }
          create: {
            args: Prisma.pedidosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          createMany: {
            args: Prisma.pedidosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pedidosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          update: {
            args: Prisma.pedidosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          deleteMany: {
            args: Prisma.pedidosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pedidosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pedidosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          aggregate: {
            args: Prisma.PedidosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePedidos>
          }
          groupBy: {
            args: Prisma.pedidosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PedidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidosCountArgs<ExtArgs>,
            result: $Utils.Optional<PedidosCountAggregateOutputType> | number
          }
        }
      }
      produtos: {
        payload: Prisma.$produtosPayload<ExtArgs>
        fields: Prisma.produtosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          findFirst: {
            args: Prisma.produtosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          findMany: {
            args: Prisma.produtosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          create: {
            args: Prisma.produtosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          createMany: {
            args: Prisma.produtosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.produtosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          update: {
            args: Prisma.produtosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          deleteMany: {
            args: Prisma.produtosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.produtosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.produtosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          aggregate: {
            args: Prisma.ProdutosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProdutos>
          }
          groupBy: {
            args: Prisma.produtosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProdutosGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtosCountArgs<ExtArgs>,
            result: $Utils.Optional<ProdutosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model carrinhos
   */

  export type AggregateCarrinhos = {
    _count: CarrinhosCountAggregateOutputType | null
    _avg: CarrinhosAvgAggregateOutputType | null
    _sum: CarrinhosSumAggregateOutputType | null
    _min: CarrinhosMinAggregateOutputType | null
    _max: CarrinhosMaxAggregateOutputType | null
  }

  export type CarrinhosAvgAggregateOutputType = {
    id_car: number | null
    prod_car: number | null
    qtd_prod_car: number | null
    desconto_car: Decimal | null
  }

  export type CarrinhosSumAggregateOutputType = {
    id_car: number | null
    prod_car: number | null
    qtd_prod_car: number | null
    desconto_car: Decimal | null
  }

  export type CarrinhosMinAggregateOutputType = {
    id_car: number | null
    prod_car: number | null
    qtd_prod_car: number | null
    desconto_car: Decimal | null
  }

  export type CarrinhosMaxAggregateOutputType = {
    id_car: number | null
    prod_car: number | null
    qtd_prod_car: number | null
    desconto_car: Decimal | null
  }

  export type CarrinhosCountAggregateOutputType = {
    id_car: number
    prod_car: number
    qtd_prod_car: number
    desconto_car: number
    _all: number
  }


  export type CarrinhosAvgAggregateInputType = {
    id_car?: true
    prod_car?: true
    qtd_prod_car?: true
    desconto_car?: true
  }

  export type CarrinhosSumAggregateInputType = {
    id_car?: true
    prod_car?: true
    qtd_prod_car?: true
    desconto_car?: true
  }

  export type CarrinhosMinAggregateInputType = {
    id_car?: true
    prod_car?: true
    qtd_prod_car?: true
    desconto_car?: true
  }

  export type CarrinhosMaxAggregateInputType = {
    id_car?: true
    prod_car?: true
    qtd_prod_car?: true
    desconto_car?: true
  }

  export type CarrinhosCountAggregateInputType = {
    id_car?: true
    prod_car?: true
    qtd_prod_car?: true
    desconto_car?: true
    _all?: true
  }

  export type CarrinhosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrinhos to aggregate.
     */
    where?: carrinhosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhosOrderByWithRelationInput | carrinhosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carrinhosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carrinhos
    **/
    _count?: true | CarrinhosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrinhosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrinhosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrinhosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrinhosMaxAggregateInputType
  }

  export type GetCarrinhosAggregateType<T extends CarrinhosAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrinhos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrinhos[P]>
      : GetScalarType<T[P], AggregateCarrinhos[P]>
  }




  export type carrinhosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrinhosWhereInput
    orderBy?: carrinhosOrderByWithAggregationInput | carrinhosOrderByWithAggregationInput[]
    by: CarrinhosScalarFieldEnum[] | CarrinhosScalarFieldEnum
    having?: carrinhosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrinhosCountAggregateInputType | true
    _avg?: CarrinhosAvgAggregateInputType
    _sum?: CarrinhosSumAggregateInputType
    _min?: CarrinhosMinAggregateInputType
    _max?: CarrinhosMaxAggregateInputType
  }

  export type CarrinhosGroupByOutputType = {
    id_car: number
    prod_car: number
    qtd_prod_car: number | null
    desconto_car: Decimal | null
    _count: CarrinhosCountAggregateOutputType | null
    _avg: CarrinhosAvgAggregateOutputType | null
    _sum: CarrinhosSumAggregateOutputType | null
    _min: CarrinhosMinAggregateOutputType | null
    _max: CarrinhosMaxAggregateOutputType | null
  }

  type GetCarrinhosGroupByPayload<T extends carrinhosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrinhosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrinhosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrinhosGroupByOutputType[P]>
            : GetScalarType<T[P], CarrinhosGroupByOutputType[P]>
        }
      >
    >


  export type carrinhosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_car?: boolean
    prod_car?: boolean
    qtd_prod_car?: boolean
    desconto_car?: boolean
  }, ExtArgs["result"]["carrinhos"]>

  export type carrinhosSelectScalar = {
    id_car?: boolean
    prod_car?: boolean
    qtd_prod_car?: boolean
    desconto_car?: boolean
  }



  export type $carrinhosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carrinhos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_car: number
      prod_car: number
      qtd_prod_car: number | null
      desconto_car: Prisma.Decimal | null
    }, ExtArgs["result"]["carrinhos"]>
    composites: {}
  }


  type carrinhosGetPayload<S extends boolean | null | undefined | carrinhosDefaultArgs> = $Result.GetResult<Prisma.$carrinhosPayload, S>

  type carrinhosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<carrinhosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarrinhosCountAggregateInputType | true
    }

  export interface carrinhosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carrinhos'], meta: { name: 'carrinhos' } }
    /**
     * Find zero or one Carrinhos that matches the filter.
     * @param {carrinhosFindUniqueArgs} args - Arguments to find a Carrinhos
     * @example
     * // Get one Carrinhos
     * const carrinhos = await prisma.carrinhos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends carrinhosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, carrinhosFindUniqueArgs<ExtArgs>>
    ): Prisma__carrinhosClient<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Carrinhos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {carrinhosFindUniqueOrThrowArgs} args - Arguments to find a Carrinhos
     * @example
     * // Get one Carrinhos
     * const carrinhos = await prisma.carrinhos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends carrinhosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carrinhosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__carrinhosClient<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Carrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhosFindFirstArgs} args - Arguments to find a Carrinhos
     * @example
     * // Get one Carrinhos
     * const carrinhos = await prisma.carrinhos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends carrinhosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, carrinhosFindFirstArgs<ExtArgs>>
    ): Prisma__carrinhosClient<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Carrinhos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhosFindFirstOrThrowArgs} args - Arguments to find a Carrinhos
     * @example
     * // Get one Carrinhos
     * const carrinhos = await prisma.carrinhos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends carrinhosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carrinhosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__carrinhosClient<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Carrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carrinhos
     * const carrinhos = await prisma.carrinhos.findMany()
     * 
     * // Get first 10 Carrinhos
     * const carrinhos = await prisma.carrinhos.findMany({ take: 10 })
     * 
     * // Only select the `id_car`
     * const carrinhosWithId_carOnly = await prisma.carrinhos.findMany({ select: { id_car: true } })
     * 
    **/
    findMany<T extends carrinhosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carrinhosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Carrinhos.
     * @param {carrinhosCreateArgs} args - Arguments to create a Carrinhos.
     * @example
     * // Create one Carrinhos
     * const Carrinhos = await prisma.carrinhos.create({
     *   data: {
     *     // ... data to create a Carrinhos
     *   }
     * })
     * 
    **/
    create<T extends carrinhosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, carrinhosCreateArgs<ExtArgs>>
    ): Prisma__carrinhosClient<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Carrinhos.
     *     @param {carrinhosCreateManyArgs} args - Arguments to create many Carrinhos.
     *     @example
     *     // Create many Carrinhos
     *     const carrinhos = await prisma.carrinhos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends carrinhosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carrinhosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carrinhos.
     * @param {carrinhosDeleteArgs} args - Arguments to delete one Carrinhos.
     * @example
     * // Delete one Carrinhos
     * const Carrinhos = await prisma.carrinhos.delete({
     *   where: {
     *     // ... filter to delete one Carrinhos
     *   }
     * })
     * 
    **/
    delete<T extends carrinhosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, carrinhosDeleteArgs<ExtArgs>>
    ): Prisma__carrinhosClient<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Carrinhos.
     * @param {carrinhosUpdateArgs} args - Arguments to update one Carrinhos.
     * @example
     * // Update one Carrinhos
     * const carrinhos = await prisma.carrinhos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends carrinhosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, carrinhosUpdateArgs<ExtArgs>>
    ): Prisma__carrinhosClient<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Carrinhos.
     * @param {carrinhosDeleteManyArgs} args - Arguments to filter Carrinhos to delete.
     * @example
     * // Delete a few Carrinhos
     * const { count } = await prisma.carrinhos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends carrinhosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carrinhosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carrinhos
     * const carrinhos = await prisma.carrinhos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends carrinhosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, carrinhosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carrinhos.
     * @param {carrinhosUpsertArgs} args - Arguments to update or create a Carrinhos.
     * @example
     * // Update or create a Carrinhos
     * const carrinhos = await prisma.carrinhos.upsert({
     *   create: {
     *     // ... data to create a Carrinhos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrinhos we want to update
     *   }
     * })
    **/
    upsert<T extends carrinhosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, carrinhosUpsertArgs<ExtArgs>>
    ): Prisma__carrinhosClient<$Result.GetResult<Prisma.$carrinhosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhosCountArgs} args - Arguments to filter Carrinhos to count.
     * @example
     * // Count the number of Carrinhos
     * const count = await prisma.carrinhos.count({
     *   where: {
     *     // ... the filter for the Carrinhos we want to count
     *   }
     * })
    **/
    count<T extends carrinhosCountArgs>(
      args?: Subset<T, carrinhosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrinhosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarrinhosAggregateArgs>(args: Subset<T, CarrinhosAggregateArgs>): Prisma.PrismaPromise<GetCarrinhosAggregateType<T>>

    /**
     * Group by Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhosGroupByArgs} args - Group by arguments.
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
      T extends carrinhosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carrinhosGroupByArgs['orderBy'] }
        : { orderBy?: carrinhosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, carrinhosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrinhosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carrinhos model
   */
  readonly fields: carrinhosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carrinhos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carrinhosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the carrinhos model
   */ 
  interface carrinhosFieldRefs {
    readonly id_car: FieldRef<"carrinhos", 'Int'>
    readonly prod_car: FieldRef<"carrinhos", 'Int'>
    readonly qtd_prod_car: FieldRef<"carrinhos", 'Int'>
    readonly desconto_car: FieldRef<"carrinhos", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * carrinhos findUnique
   */
  export type carrinhosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * Filter, which carrinhos to fetch.
     */
    where: carrinhosWhereUniqueInput
  }

  /**
   * carrinhos findUniqueOrThrow
   */
  export type carrinhosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * Filter, which carrinhos to fetch.
     */
    where: carrinhosWhereUniqueInput
  }

  /**
   * carrinhos findFirst
   */
  export type carrinhosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * Filter, which carrinhos to fetch.
     */
    where?: carrinhosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhosOrderByWithRelationInput | carrinhosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carrinhos.
     */
    cursor?: carrinhosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinhos.
     */
    distinct?: CarrinhosScalarFieldEnum | CarrinhosScalarFieldEnum[]
  }

  /**
   * carrinhos findFirstOrThrow
   */
  export type carrinhosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * Filter, which carrinhos to fetch.
     */
    where?: carrinhosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhosOrderByWithRelationInput | carrinhosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carrinhos.
     */
    cursor?: carrinhosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinhos.
     */
    distinct?: CarrinhosScalarFieldEnum | CarrinhosScalarFieldEnum[]
  }

  /**
   * carrinhos findMany
   */
  export type carrinhosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * Filter, which carrinhos to fetch.
     */
    where?: carrinhosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhosOrderByWithRelationInput | carrinhosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carrinhos.
     */
    cursor?: carrinhosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    distinct?: CarrinhosScalarFieldEnum | CarrinhosScalarFieldEnum[]
  }

  /**
   * carrinhos create
   */
  export type carrinhosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * The data needed to create a carrinhos.
     */
    data: XOR<carrinhosCreateInput, carrinhosUncheckedCreateInput>
  }

  /**
   * carrinhos createMany
   */
  export type carrinhosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carrinhos.
     */
    data: carrinhosCreateManyInput | carrinhosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carrinhos update
   */
  export type carrinhosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * The data needed to update a carrinhos.
     */
    data: XOR<carrinhosUpdateInput, carrinhosUncheckedUpdateInput>
    /**
     * Choose, which carrinhos to update.
     */
    where: carrinhosWhereUniqueInput
  }

  /**
   * carrinhos updateMany
   */
  export type carrinhosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carrinhos.
     */
    data: XOR<carrinhosUpdateManyMutationInput, carrinhosUncheckedUpdateManyInput>
    /**
     * Filter which carrinhos to update
     */
    where?: carrinhosWhereInput
  }

  /**
   * carrinhos upsert
   */
  export type carrinhosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * The filter to search for the carrinhos to update in case it exists.
     */
    where: carrinhosWhereUniqueInput
    /**
     * In case the carrinhos found by the `where` argument doesn't exist, create a new carrinhos with this data.
     */
    create: XOR<carrinhosCreateInput, carrinhosUncheckedCreateInput>
    /**
     * In case the carrinhos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carrinhosUpdateInput, carrinhosUncheckedUpdateInput>
  }

  /**
   * carrinhos delete
   */
  export type carrinhosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
    /**
     * Filter which carrinhos to delete.
     */
    where: carrinhosWhereUniqueInput
  }

  /**
   * carrinhos deleteMany
   */
  export type carrinhosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrinhos to delete
     */
    where?: carrinhosWhereInput
  }

  /**
   * carrinhos without action
   */
  export type carrinhosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinhos
     */
    select?: carrinhosSelect<ExtArgs> | null
  }


  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    cpf_cli: number | null
  }

  export type ClientesSumAggregateOutputType = {
    cpf_cli: bigint | null
  }

  export type ClientesMinAggregateOutputType = {
    cpf_cli: bigint | null
    nome_cli: string | null
    email_cli: string | null
    celular_cli: string | null
    end_res_cli: string | null
    senha_cli: string | null
    data_cadastro_cli: Date | null
    niver_cli: Date | null
    trusted_cli: boolean | null
  }

  export type ClientesMaxAggregateOutputType = {
    cpf_cli: bigint | null
    nome_cli: string | null
    email_cli: string | null
    celular_cli: string | null
    end_res_cli: string | null
    senha_cli: string | null
    data_cadastro_cli: Date | null
    niver_cli: Date | null
    trusted_cli: boolean | null
  }

  export type ClientesCountAggregateOutputType = {
    cpf_cli: number
    nome_cli: number
    email_cli: number
    celular_cli: number
    end_res_cli: number
    senha_cli: number
    data_cadastro_cli: number
    niver_cli: number
    trusted_cli: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    cpf_cli?: true
  }

  export type ClientesSumAggregateInputType = {
    cpf_cli?: true
  }

  export type ClientesMinAggregateInputType = {
    cpf_cli?: true
    nome_cli?: true
    email_cli?: true
    celular_cli?: true
    end_res_cli?: true
    senha_cli?: true
    data_cadastro_cli?: true
    niver_cli?: true
    trusted_cli?: true
  }

  export type ClientesMaxAggregateInputType = {
    cpf_cli?: true
    nome_cli?: true
    email_cli?: true
    celular_cli?: true
    end_res_cli?: true
    senha_cli?: true
    data_cadastro_cli?: true
    niver_cli?: true
    trusted_cli?: true
  }

  export type ClientesCountAggregateInputType = {
    cpf_cli?: true
    nome_cli?: true
    email_cli?: true
    celular_cli?: true
    end_res_cli?: true
    senha_cli?: true
    data_cadastro_cli?: true
    niver_cli?: true
    trusted_cli?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    cpf_cli: bigint
    nome_cli: string | null
    email_cli: string | null
    celular_cli: string | null
    end_res_cli: string | null
    senha_cli: string | null
    data_cadastro_cli: Date | null
    niver_cli: Date | null
    trusted_cli: boolean | null
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf_cli?: boolean
    nome_cli?: boolean
    email_cli?: boolean
    celular_cli?: boolean
    end_res_cli?: boolean
    senha_cli?: boolean
    data_cadastro_cli?: boolean
    niver_cli?: boolean
    trusted_cli?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectScalar = {
    cpf_cli?: boolean
    nome_cli?: boolean
    email_cli?: boolean
    celular_cli?: boolean
    end_res_cli?: boolean
    senha_cli?: boolean
    data_cadastro_cli?: boolean
    niver_cli?: boolean
    trusted_cli?: boolean
  }



  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      cpf_cli: bigint
      nome_cli: string | null
      email_cli: string | null
      celular_cli: string | null
      end_res_cli: string | null
      senha_cli: string | null
      data_cadastro_cli: Date | null
      niver_cli: Date | null
      trusted_cli: boolean | null
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }


  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clientesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>
    ): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Clientes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clientesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>
    ): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `cpf_cli`
     * const clientesWithCpf_cliOnly = await prisma.clientes.findMany({ select: { cpf_cli: true } })
     * 
    **/
    findMany<T extends clientesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
    **/
    create<T extends clientesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clientesCreateArgs<ExtArgs>>
    ): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clientes.
     *     @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     *     @example
     *     // Create many Clientes
     *     const clientes = await prisma.clientes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clientesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
    **/
    delete<T extends clientesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>
    ): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clientesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>
    ): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clientesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clientesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
    **/
    upsert<T extends clientesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>
    ): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
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
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the clientes model
   */ 
  interface clientesFieldRefs {
    readonly cpf_cli: FieldRef<"clientes", 'BigInt'>
    readonly nome_cli: FieldRef<"clientes", 'String'>
    readonly email_cli: FieldRef<"clientes", 'String'>
    readonly celular_cli: FieldRef<"clientes", 'String'>
    readonly end_res_cli: FieldRef<"clientes", 'String'>
    readonly senha_cli: FieldRef<"clientes", 'String'>
    readonly data_cadastro_cli: FieldRef<"clientes", 'DateTime'>
    readonly niver_cli: FieldRef<"clientes", 'DateTime'>
    readonly trusted_cli: FieldRef<"clientes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
  }


  /**
   * Model pedidos
   */

  export type AggregatePedidos = {
    _count: PedidosCountAggregateOutputType | null
    _avg: PedidosAvgAggregateOutputType | null
    _sum: PedidosSumAggregateOutputType | null
    _min: PedidosMinAggregateOutputType | null
    _max: PedidosMaxAggregateOutputType | null
  }

  export type PedidosAvgAggregateOutputType = {
    id_ped: number | null
    cpf_cli: number | null
    id_car_ped: number | null
    valor_ped: Decimal | null
  }

  export type PedidosSumAggregateOutputType = {
    id_ped: number | null
    cpf_cli: bigint | null
    id_car_ped: number | null
    valor_ped: Decimal | null
  }

  export type PedidosMinAggregateOutputType = {
    id_ped: number | null
    data_ped: Date | null
    cpf_cli: bigint | null
    id_car_ped: number | null
    valor_ped: Decimal | null
    transp_ped: string | null
    rastreio_ped: string | null
    end_entrega_ped: string | null
    ped_sem_pgto: boolean | null
  }

  export type PedidosMaxAggregateOutputType = {
    id_ped: number | null
    data_ped: Date | null
    cpf_cli: bigint | null
    id_car_ped: number | null
    valor_ped: Decimal | null
    transp_ped: string | null
    rastreio_ped: string | null
    end_entrega_ped: string | null
    ped_sem_pgto: boolean | null
  }

  export type PedidosCountAggregateOutputType = {
    id_ped: number
    data_ped: number
    cpf_cli: number
    id_car_ped: number
    valor_ped: number
    transp_ped: number
    rastreio_ped: number
    end_entrega_ped: number
    ped_sem_pgto: number
    _all: number
  }


  export type PedidosAvgAggregateInputType = {
    id_ped?: true
    cpf_cli?: true
    id_car_ped?: true
    valor_ped?: true
  }

  export type PedidosSumAggregateInputType = {
    id_ped?: true
    cpf_cli?: true
    id_car_ped?: true
    valor_ped?: true
  }

  export type PedidosMinAggregateInputType = {
    id_ped?: true
    data_ped?: true
    cpf_cli?: true
    id_car_ped?: true
    valor_ped?: true
    transp_ped?: true
    rastreio_ped?: true
    end_entrega_ped?: true
    ped_sem_pgto?: true
  }

  export type PedidosMaxAggregateInputType = {
    id_ped?: true
    data_ped?: true
    cpf_cli?: true
    id_car_ped?: true
    valor_ped?: true
    transp_ped?: true
    rastreio_ped?: true
    end_entrega_ped?: true
    ped_sem_pgto?: true
  }

  export type PedidosCountAggregateInputType = {
    id_ped?: true
    data_ped?: true
    cpf_cli?: true
    id_car_ped?: true
    valor_ped?: true
    transp_ped?: true
    rastreio_ped?: true
    end_entrega_ped?: true
    ped_sem_pgto?: true
    _all?: true
  }

  export type PedidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to aggregate.
     */
    where?: pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidosMaxAggregateInputType
  }

  export type GetPedidosAggregateType<T extends PedidosAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidos[P]>
      : GetScalarType<T[P], AggregatePedidos[P]>
  }




  export type pedidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidosWhereInput
    orderBy?: pedidosOrderByWithAggregationInput | pedidosOrderByWithAggregationInput[]
    by: PedidosScalarFieldEnum[] | PedidosScalarFieldEnum
    having?: pedidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidosCountAggregateInputType | true
    _avg?: PedidosAvgAggregateInputType
    _sum?: PedidosSumAggregateInputType
    _min?: PedidosMinAggregateInputType
    _max?: PedidosMaxAggregateInputType
  }

  export type PedidosGroupByOutputType = {
    id_ped: number
    data_ped: Date | null
    cpf_cli: bigint
    id_car_ped: number
    valor_ped: Decimal | null
    transp_ped: string | null
    rastreio_ped: string | null
    end_entrega_ped: string | null
    ped_sem_pgto: boolean | null
    _count: PedidosCountAggregateOutputType | null
    _avg: PedidosAvgAggregateOutputType | null
    _sum: PedidosSumAggregateOutputType | null
    _min: PedidosMinAggregateOutputType | null
    _max: PedidosMaxAggregateOutputType | null
  }

  type GetPedidosGroupByPayload<T extends pedidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidosGroupByOutputType[P]>
            : GetScalarType<T[P], PedidosGroupByOutputType[P]>
        }
      >
    >


  export type pedidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ped?: boolean
    data_ped?: boolean
    cpf_cli?: boolean
    id_car_ped?: boolean
    valor_ped?: boolean
    transp_ped?: boolean
    rastreio_ped?: boolean
    end_entrega_ped?: boolean
    ped_sem_pgto?: boolean
  }, ExtArgs["result"]["pedidos"]>

  export type pedidosSelectScalar = {
    id_ped?: boolean
    data_ped?: boolean
    cpf_cli?: boolean
    id_car_ped?: boolean
    valor_ped?: boolean
    transp_ped?: boolean
    rastreio_ped?: boolean
    end_entrega_ped?: boolean
    ped_sem_pgto?: boolean
  }



  export type $pedidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedidos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_ped: number
      data_ped: Date | null
      cpf_cli: bigint
      id_car_ped: number
      valor_ped: Prisma.Decimal | null
      transp_ped: string | null
      rastreio_ped: string | null
      end_entrega_ped: string | null
      ped_sem_pgto: boolean | null
    }, ExtArgs["result"]["pedidos"]>
    composites: {}
  }


  type pedidosGetPayload<S extends boolean | null | undefined | pedidosDefaultArgs> = $Result.GetResult<Prisma.$pedidosPayload, S>

  type pedidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pedidosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PedidosCountAggregateInputType | true
    }

  export interface pedidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedidos'], meta: { name: 'pedidos' } }
    /**
     * Find zero or one Pedidos that matches the filter.
     * @param {pedidosFindUniqueArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pedidosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pedidosFindUniqueArgs<ExtArgs>>
    ): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pedidos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pedidosFindUniqueOrThrowArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pedidosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pedidosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosFindFirstArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pedidosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pedidosFindFirstArgs<ExtArgs>>
    ): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosFindFirstOrThrowArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pedidosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pedidosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedidos.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedidos.findMany({ take: 10 })
     * 
     * // Only select the `id_ped`
     * const pedidosWithId_pedOnly = await prisma.pedidos.findMany({ select: { id_ped: true } })
     * 
    **/
    findMany<T extends pedidosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pedidosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pedidos.
     * @param {pedidosCreateArgs} args - Arguments to create a Pedidos.
     * @example
     * // Create one Pedidos
     * const Pedidos = await prisma.pedidos.create({
     *   data: {
     *     // ... data to create a Pedidos
     *   }
     * })
     * 
    **/
    create<T extends pedidosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pedidosCreateArgs<ExtArgs>>
    ): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pedidos.
     *     @param {pedidosCreateManyArgs} args - Arguments to create many Pedidos.
     *     @example
     *     // Create many Pedidos
     *     const pedidos = await prisma.pedidos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pedidosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pedidosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedidos.
     * @param {pedidosDeleteArgs} args - Arguments to delete one Pedidos.
     * @example
     * // Delete one Pedidos
     * const Pedidos = await prisma.pedidos.delete({
     *   where: {
     *     // ... filter to delete one Pedidos
     *   }
     * })
     * 
    **/
    delete<T extends pedidosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pedidosDeleteArgs<ExtArgs>>
    ): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pedidos.
     * @param {pedidosUpdateArgs} args - Arguments to update one Pedidos.
     * @example
     * // Update one Pedidos
     * const pedidos = await prisma.pedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pedidosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pedidosUpdateArgs<ExtArgs>>
    ): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidosDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pedidosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pedidosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedidos = await prisma.pedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pedidosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pedidosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedidos.
     * @param {pedidosUpsertArgs} args - Arguments to update or create a Pedidos.
     * @example
     * // Update or create a Pedidos
     * const pedidos = await prisma.pedidos.upsert({
     *   create: {
     *     // ... data to create a Pedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedidos we want to update
     *   }
     * })
    **/
    upsert<T extends pedidosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pedidosUpsertArgs<ExtArgs>>
    ): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedidos.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidosCountArgs>(
      args?: Subset<T, pedidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidosAggregateArgs>(args: Subset<T, PedidosAggregateArgs>): Prisma.PrismaPromise<GetPedidosAggregateType<T>>

    /**
     * Group by Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosGroupByArgs} args - Group by arguments.
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
      T extends pedidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidosGroupByArgs['orderBy'] }
        : { orderBy?: pedidosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedidos model
   */
  readonly fields: pedidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the pedidos model
   */ 
  interface pedidosFieldRefs {
    readonly id_ped: FieldRef<"pedidos", 'Int'>
    readonly data_ped: FieldRef<"pedidos", 'DateTime'>
    readonly cpf_cli: FieldRef<"pedidos", 'BigInt'>
    readonly id_car_ped: FieldRef<"pedidos", 'Int'>
    readonly valor_ped: FieldRef<"pedidos", 'Decimal'>
    readonly transp_ped: FieldRef<"pedidos", 'String'>
    readonly rastreio_ped: FieldRef<"pedidos", 'String'>
    readonly end_entrega_ped: FieldRef<"pedidos", 'String'>
    readonly ped_sem_pgto: FieldRef<"pedidos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * pedidos findUnique
   */
  export type pedidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where: pedidosWhereUniqueInput
  }

  /**
   * pedidos findUniqueOrThrow
   */
  export type pedidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where: pedidosWhereUniqueInput
  }

  /**
   * pedidos findFirst
   */
  export type pedidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidosScalarFieldEnum | PedidosScalarFieldEnum[]
  }

  /**
   * pedidos findFirstOrThrow
   */
  export type pedidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidosScalarFieldEnum | PedidosScalarFieldEnum[]
  }

  /**
   * pedidos findMany
   */
  export type pedidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidosScalarFieldEnum | PedidosScalarFieldEnum[]
  }

  /**
   * pedidos create
   */
  export type pedidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * The data needed to create a pedidos.
     */
    data: XOR<pedidosCreateInput, pedidosUncheckedCreateInput>
  }

  /**
   * pedidos createMany
   */
  export type pedidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidosCreateManyInput | pedidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedidos update
   */
  export type pedidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * The data needed to update a pedidos.
     */
    data: XOR<pedidosUpdateInput, pedidosUncheckedUpdateInput>
    /**
     * Choose, which pedidos to update.
     */
    where: pedidosWhereUniqueInput
  }

  /**
   * pedidos updateMany
   */
  export type pedidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidosUpdateManyMutationInput, pedidosUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidosWhereInput
  }

  /**
   * pedidos upsert
   */
  export type pedidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * The filter to search for the pedidos to update in case it exists.
     */
    where: pedidosWhereUniqueInput
    /**
     * In case the pedidos found by the `where` argument doesn't exist, create a new pedidos with this data.
     */
    create: XOR<pedidosCreateInput, pedidosUncheckedCreateInput>
    /**
     * In case the pedidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidosUpdateInput, pedidosUncheckedUpdateInput>
  }

  /**
   * pedidos delete
   */
  export type pedidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Filter which pedidos to delete.
     */
    where: pedidosWhereUniqueInput
  }

  /**
   * pedidos deleteMany
   */
  export type pedidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidosWhereInput
  }

  /**
   * pedidos without action
   */
  export type pedidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
  }


  /**
   * Model produtos
   */

  export type AggregateProdutos = {
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  export type ProdutosAvgAggregateOutputType = {
    valor_venda_prod: Decimal | null
    estoque_prod: number | null
    custo_prod: Decimal | null
  }

  export type ProdutosSumAggregateOutputType = {
    valor_venda_prod: Decimal | null
    estoque_prod: number | null
    custo_prod: Decimal | null
  }

  export type ProdutosMinAggregateOutputType = {
    id_prod: string | null
    nome_prod: string | null
    tipo_prod: string | null
    descr_prod: string | null
    valor_venda_prod: Decimal | null
    estoque_prod: number | null
    custo_prod: Decimal | null
  }

  export type ProdutosMaxAggregateOutputType = {
    id_prod: string | null
    nome_prod: string | null
    tipo_prod: string | null
    descr_prod: string | null
    valor_venda_prod: Decimal | null
    estoque_prod: number | null
    custo_prod: Decimal | null
  }

  export type ProdutosCountAggregateOutputType = {
    id_prod: number
    nome_prod: number
    tipo_prod: number
    descr_prod: number
    valor_venda_prod: number
    estoque_prod: number
    custo_prod: number
    _all: number
  }


  export type ProdutosAvgAggregateInputType = {
    valor_venda_prod?: true
    estoque_prod?: true
    custo_prod?: true
  }

  export type ProdutosSumAggregateInputType = {
    valor_venda_prod?: true
    estoque_prod?: true
    custo_prod?: true
  }

  export type ProdutosMinAggregateInputType = {
    id_prod?: true
    nome_prod?: true
    tipo_prod?: true
    descr_prod?: true
    valor_venda_prod?: true
    estoque_prod?: true
    custo_prod?: true
  }

  export type ProdutosMaxAggregateInputType = {
    id_prod?: true
    nome_prod?: true
    tipo_prod?: true
    descr_prod?: true
    valor_venda_prod?: true
    estoque_prod?: true
    custo_prod?: true
  }

  export type ProdutosCountAggregateInputType = {
    id_prod?: true
    nome_prod?: true
    tipo_prod?: true
    descr_prod?: true
    valor_venda_prod?: true
    estoque_prod?: true
    custo_prod?: true
    _all?: true
  }

  export type ProdutosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to aggregate.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutosMaxAggregateInputType
  }

  export type GetProdutosAggregateType<T extends ProdutosAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutos[P]>
      : GetScalarType<T[P], AggregateProdutos[P]>
  }




  export type produtosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtosWhereInput
    orderBy?: produtosOrderByWithAggregationInput | produtosOrderByWithAggregationInput[]
    by: ProdutosScalarFieldEnum[] | ProdutosScalarFieldEnum
    having?: produtosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutosCountAggregateInputType | true
    _avg?: ProdutosAvgAggregateInputType
    _sum?: ProdutosSumAggregateInputType
    _min?: ProdutosMinAggregateInputType
    _max?: ProdutosMaxAggregateInputType
  }

  export type ProdutosGroupByOutputType = {
    id_prod: string
    nome_prod: string | null
    tipo_prod: string | null
    descr_prod: string | null
    valor_venda_prod: Decimal | null
    estoque_prod: number | null
    custo_prod: Decimal | null
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  type GetProdutosGroupByPayload<T extends produtosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
        }
      >
    >


  export type produtosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prod?: boolean
    nome_prod?: boolean
    tipo_prod?: boolean
    descr_prod?: boolean
    valor_venda_prod?: boolean
    estoque_prod?: boolean
    custo_prod?: boolean
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectScalar = {
    id_prod?: boolean
    nome_prod?: boolean
    tipo_prod?: boolean
    descr_prod?: boolean
    valor_venda_prod?: boolean
    estoque_prod?: boolean
    custo_prod?: boolean
  }



  export type $produtosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produtos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_prod: string
      nome_prod: string | null
      tipo_prod: string | null
      descr_prod: string | null
      valor_venda_prod: Prisma.Decimal | null
      estoque_prod: number | null
      custo_prod: Prisma.Decimal | null
    }, ExtArgs["result"]["produtos"]>
    composites: {}
  }


  type produtosGetPayload<S extends boolean | null | undefined | produtosDefaultArgs> = $Result.GetResult<Prisma.$produtosPayload, S>

  type produtosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<produtosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProdutosCountAggregateInputType | true
    }

  export interface produtosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produtos'], meta: { name: 'produtos' } }
    /**
     * Find zero or one Produtos that matches the filter.
     * @param {produtosFindUniqueArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends produtosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, produtosFindUniqueArgs<ExtArgs>>
    ): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Produtos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {produtosFindUniqueOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends produtosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, produtosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindFirstArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends produtosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, produtosFindFirstArgs<ExtArgs>>
    ): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Produtos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindFirstOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends produtosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, produtosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produtos.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produtos.findMany({ take: 10 })
     * 
     * // Only select the `id_prod`
     * const produtosWithId_prodOnly = await prisma.produtos.findMany({ select: { id_prod: true } })
     * 
    **/
    findMany<T extends produtosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, produtosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Produtos.
     * @param {produtosCreateArgs} args - Arguments to create a Produtos.
     * @example
     * // Create one Produtos
     * const Produtos = await prisma.produtos.create({
     *   data: {
     *     // ... data to create a Produtos
     *   }
     * })
     * 
    **/
    create<T extends produtosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, produtosCreateArgs<ExtArgs>>
    ): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Produtos.
     *     @param {produtosCreateManyArgs} args - Arguments to create many Produtos.
     *     @example
     *     // Create many Produtos
     *     const produtos = await prisma.produtos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends produtosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, produtosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produtos.
     * @param {produtosDeleteArgs} args - Arguments to delete one Produtos.
     * @example
     * // Delete one Produtos
     * const Produtos = await prisma.produtos.delete({
     *   where: {
     *     // ... filter to delete one Produtos
     *   }
     * })
     * 
    **/
    delete<T extends produtosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, produtosDeleteArgs<ExtArgs>>
    ): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Produtos.
     * @param {produtosUpdateArgs} args - Arguments to update one Produtos.
     * @example
     * // Update one Produtos
     * const produtos = await prisma.produtos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends produtosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, produtosUpdateArgs<ExtArgs>>
    ): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Produtos.
     * @param {produtosDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produtos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends produtosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, produtosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends produtosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, produtosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produtos.
     * @param {produtosUpsertArgs} args - Arguments to update or create a Produtos.
     * @example
     * // Update or create a Produtos
     * const produtos = await prisma.produtos.upsert({
     *   create: {
     *     // ... data to create a Produtos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtos we want to update
     *   }
     * })
    **/
    upsert<T extends produtosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, produtosUpsertArgs<ExtArgs>>
    ): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produtos.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtosCountArgs>(
      args?: Subset<T, produtosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutosAggregateArgs>(args: Subset<T, ProdutosAggregateArgs>): Prisma.PrismaPromise<GetProdutosAggregateType<T>>

    /**
     * Group by Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosGroupByArgs} args - Group by arguments.
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
      T extends produtosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtosGroupByArgs['orderBy'] }
        : { orderBy?: produtosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produtosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produtos model
   */
  readonly fields: produtosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produtos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the produtos model
   */ 
  interface produtosFieldRefs {
    readonly id_prod: FieldRef<"produtos", 'String'>
    readonly nome_prod: FieldRef<"produtos", 'String'>
    readonly tipo_prod: FieldRef<"produtos", 'String'>
    readonly descr_prod: FieldRef<"produtos", 'String'>
    readonly valor_venda_prod: FieldRef<"produtos", 'Decimal'>
    readonly estoque_prod: FieldRef<"produtos", 'Int'>
    readonly custo_prod: FieldRef<"produtos", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * produtos findUnique
   */
  export type produtosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos findUniqueOrThrow
   */
  export type produtosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos findFirst
   */
  export type produtosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos findFirstOrThrow
   */
  export type produtosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos findMany
   */
  export type produtosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos create
   */
  export type produtosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * The data needed to create a produtos.
     */
    data: XOR<produtosCreateInput, produtosUncheckedCreateInput>
  }

  /**
   * produtos createMany
   */
  export type produtosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtosCreateManyInput | produtosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produtos update
   */
  export type produtosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * The data needed to update a produtos.
     */
    data: XOR<produtosUpdateInput, produtosUncheckedUpdateInput>
    /**
     * Choose, which produtos to update.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos updateMany
   */
  export type produtosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtosWhereInput
  }

  /**
   * produtos upsert
   */
  export type produtosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * The filter to search for the produtos to update in case it exists.
     */
    where: produtosWhereUniqueInput
    /**
     * In case the produtos found by the `where` argument doesn't exist, create a new produtos with this data.
     */
    create: XOR<produtosCreateInput, produtosUncheckedCreateInput>
    /**
     * In case the produtos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtosUpdateInput, produtosUncheckedUpdateInput>
  }

  /**
   * produtos delete
   */
  export type produtosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Filter which produtos to delete.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos deleteMany
   */
  export type produtosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtosWhereInput
  }

  /**
   * produtos without action
   */
  export type produtosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
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


  export const CarrinhosScalarFieldEnum: {
    id_car: 'id_car',
    prod_car: 'prod_car',
    qtd_prod_car: 'qtd_prod_car',
    desconto_car: 'desconto_car'
  };

  export type CarrinhosScalarFieldEnum = (typeof CarrinhosScalarFieldEnum)[keyof typeof CarrinhosScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    cpf_cli: 'cpf_cli',
    nome_cli: 'nome_cli',
    email_cli: 'email_cli',
    celular_cli: 'celular_cli',
    end_res_cli: 'end_res_cli',
    senha_cli: 'senha_cli',
    data_cadastro_cli: 'data_cadastro_cli',
    niver_cli: 'niver_cli',
    trusted_cli: 'trusted_cli'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const PedidosScalarFieldEnum: {
    id_ped: 'id_ped',
    data_ped: 'data_ped',
    cpf_cli: 'cpf_cli',
    id_car_ped: 'id_car_ped',
    valor_ped: 'valor_ped',
    transp_ped: 'transp_ped',
    rastreio_ped: 'rastreio_ped',
    end_entrega_ped: 'end_entrega_ped',
    ped_sem_pgto: 'ped_sem_pgto'
  };

  export type PedidosScalarFieldEnum = (typeof PedidosScalarFieldEnum)[keyof typeof PedidosScalarFieldEnum]


  export const ProdutosScalarFieldEnum: {
    id_prod: 'id_prod',
    nome_prod: 'nome_prod',
    tipo_prod: 'tipo_prod',
    descr_prod: 'descr_prod',
    valor_venda_prod: 'valor_venda_prod',
    estoque_prod: 'estoque_prod',
    custo_prod: 'custo_prod'
  };

  export type ProdutosScalarFieldEnum = (typeof ProdutosScalarFieldEnum)[keyof typeof ProdutosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type carrinhosWhereInput = {
    AND?: carrinhosWhereInput | carrinhosWhereInput[]
    OR?: carrinhosWhereInput[]
    NOT?: carrinhosWhereInput | carrinhosWhereInput[]
    id_car?: IntFilter<"carrinhos"> | number
    prod_car?: IntFilter<"carrinhos"> | number
    qtd_prod_car?: IntNullableFilter<"carrinhos"> | number | null
    desconto_car?: DecimalNullableFilter<"carrinhos"> | Decimal | DecimalJsLike | number | string | null
  }

  export type carrinhosOrderByWithRelationInput = {
    id_car?: SortOrder
    prod_car?: SortOrder
    qtd_prod_car?: SortOrderInput | SortOrder
    desconto_car?: SortOrderInput | SortOrder
  }

  export type carrinhosWhereUniqueInput = Prisma.AtLeast<{
    id_car_prod_car?: carrinhosId_carProd_carCompoundUniqueInput
    AND?: carrinhosWhereInput | carrinhosWhereInput[]
    OR?: carrinhosWhereInput[]
    NOT?: carrinhosWhereInput | carrinhosWhereInput[]
    id_car?: IntFilter<"carrinhos"> | number
    prod_car?: IntFilter<"carrinhos"> | number
    qtd_prod_car?: IntNullableFilter<"carrinhos"> | number | null
    desconto_car?: DecimalNullableFilter<"carrinhos"> | Decimal | DecimalJsLike | number | string | null
  }, "id_car_prod_car">

  export type carrinhosOrderByWithAggregationInput = {
    id_car?: SortOrder
    prod_car?: SortOrder
    qtd_prod_car?: SortOrderInput | SortOrder
    desconto_car?: SortOrderInput | SortOrder
    _count?: carrinhosCountOrderByAggregateInput
    _avg?: carrinhosAvgOrderByAggregateInput
    _max?: carrinhosMaxOrderByAggregateInput
    _min?: carrinhosMinOrderByAggregateInput
    _sum?: carrinhosSumOrderByAggregateInput
  }

  export type carrinhosScalarWhereWithAggregatesInput = {
    AND?: carrinhosScalarWhereWithAggregatesInput | carrinhosScalarWhereWithAggregatesInput[]
    OR?: carrinhosScalarWhereWithAggregatesInput[]
    NOT?: carrinhosScalarWhereWithAggregatesInput | carrinhosScalarWhereWithAggregatesInput[]
    id_car?: IntWithAggregatesFilter<"carrinhos"> | number
    prod_car?: IntWithAggregatesFilter<"carrinhos"> | number
    qtd_prod_car?: IntNullableWithAggregatesFilter<"carrinhos"> | number | null
    desconto_car?: DecimalNullableWithAggregatesFilter<"carrinhos"> | Decimal | DecimalJsLike | number | string | null
  }

  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    cpf_cli?: BigIntFilter<"clientes"> | bigint | number
    nome_cli?: StringNullableFilter<"clientes"> | string | null
    email_cli?: StringNullableFilter<"clientes"> | string | null
    celular_cli?: StringNullableFilter<"clientes"> | string | null
    end_res_cli?: StringNullableFilter<"clientes"> | string | null
    senha_cli?: StringNullableFilter<"clientes"> | string | null
    data_cadastro_cli?: DateTimeNullableFilter<"clientes"> | Date | string | null
    niver_cli?: DateTimeNullableFilter<"clientes"> | Date | string | null
    trusted_cli?: BoolNullableFilter<"clientes"> | boolean | null
  }

  export type clientesOrderByWithRelationInput = {
    cpf_cli?: SortOrder
    nome_cli?: SortOrderInput | SortOrder
    email_cli?: SortOrderInput | SortOrder
    celular_cli?: SortOrderInput | SortOrder
    end_res_cli?: SortOrderInput | SortOrder
    senha_cli?: SortOrderInput | SortOrder
    data_cadastro_cli?: SortOrderInput | SortOrder
    niver_cli?: SortOrderInput | SortOrder
    trusted_cli?: SortOrderInput | SortOrder
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    cpf_cli?: bigint | number
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    nome_cli?: StringNullableFilter<"clientes"> | string | null
    email_cli?: StringNullableFilter<"clientes"> | string | null
    celular_cli?: StringNullableFilter<"clientes"> | string | null
    end_res_cli?: StringNullableFilter<"clientes"> | string | null
    senha_cli?: StringNullableFilter<"clientes"> | string | null
    data_cadastro_cli?: DateTimeNullableFilter<"clientes"> | Date | string | null
    niver_cli?: DateTimeNullableFilter<"clientes"> | Date | string | null
    trusted_cli?: BoolNullableFilter<"clientes"> | boolean | null
  }, "cpf_cli">

  export type clientesOrderByWithAggregationInput = {
    cpf_cli?: SortOrder
    nome_cli?: SortOrderInput | SortOrder
    email_cli?: SortOrderInput | SortOrder
    celular_cli?: SortOrderInput | SortOrder
    end_res_cli?: SortOrderInput | SortOrder
    senha_cli?: SortOrderInput | SortOrder
    data_cadastro_cli?: SortOrderInput | SortOrder
    niver_cli?: SortOrderInput | SortOrder
    trusted_cli?: SortOrderInput | SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    cpf_cli?: BigIntWithAggregatesFilter<"clientes"> | bigint | number
    nome_cli?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    email_cli?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    celular_cli?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    end_res_cli?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    senha_cli?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    data_cadastro_cli?: DateTimeNullableWithAggregatesFilter<"clientes"> | Date | string | null
    niver_cli?: DateTimeNullableWithAggregatesFilter<"clientes"> | Date | string | null
    trusted_cli?: BoolNullableWithAggregatesFilter<"clientes"> | boolean | null
  }

  export type pedidosWhereInput = {
    AND?: pedidosWhereInput | pedidosWhereInput[]
    OR?: pedidosWhereInput[]
    NOT?: pedidosWhereInput | pedidosWhereInput[]
    id_ped?: IntFilter<"pedidos"> | number
    data_ped?: DateTimeNullableFilter<"pedidos"> | Date | string | null
    cpf_cli?: BigIntFilter<"pedidos"> | bigint | number
    id_car_ped?: IntFilter<"pedidos"> | number
    valor_ped?: DecimalNullableFilter<"pedidos"> | Decimal | DecimalJsLike | number | string | null
    transp_ped?: StringNullableFilter<"pedidos"> | string | null
    rastreio_ped?: StringNullableFilter<"pedidos"> | string | null
    end_entrega_ped?: StringNullableFilter<"pedidos"> | string | null
    ped_sem_pgto?: BoolNullableFilter<"pedidos"> | boolean | null
  }

  export type pedidosOrderByWithRelationInput = {
    id_ped?: SortOrder
    data_ped?: SortOrderInput | SortOrder
    cpf_cli?: SortOrder
    id_car_ped?: SortOrder
    valor_ped?: SortOrderInput | SortOrder
    transp_ped?: SortOrderInput | SortOrder
    rastreio_ped?: SortOrderInput | SortOrder
    end_entrega_ped?: SortOrderInput | SortOrder
    ped_sem_pgto?: SortOrderInput | SortOrder
  }

  export type pedidosWhereUniqueInput = Prisma.AtLeast<{
    id_ped_id_car_ped_cpf_cli?: pedidosId_pedId_car_pedCpf_cliCompoundUniqueInput
    AND?: pedidosWhereInput | pedidosWhereInput[]
    OR?: pedidosWhereInput[]
    NOT?: pedidosWhereInput | pedidosWhereInput[]
    id_ped?: IntFilter<"pedidos"> | number
    data_ped?: DateTimeNullableFilter<"pedidos"> | Date | string | null
    cpf_cli?: BigIntFilter<"pedidos"> | bigint | number
    id_car_ped?: IntFilter<"pedidos"> | number
    valor_ped?: DecimalNullableFilter<"pedidos"> | Decimal | DecimalJsLike | number | string | null
    transp_ped?: StringNullableFilter<"pedidos"> | string | null
    rastreio_ped?: StringNullableFilter<"pedidos"> | string | null
    end_entrega_ped?: StringNullableFilter<"pedidos"> | string | null
    ped_sem_pgto?: BoolNullableFilter<"pedidos"> | boolean | null
  }, "id_ped_id_car_ped_cpf_cli">

  export type pedidosOrderByWithAggregationInput = {
    id_ped?: SortOrder
    data_ped?: SortOrderInput | SortOrder
    cpf_cli?: SortOrder
    id_car_ped?: SortOrder
    valor_ped?: SortOrderInput | SortOrder
    transp_ped?: SortOrderInput | SortOrder
    rastreio_ped?: SortOrderInput | SortOrder
    end_entrega_ped?: SortOrderInput | SortOrder
    ped_sem_pgto?: SortOrderInput | SortOrder
    _count?: pedidosCountOrderByAggregateInput
    _avg?: pedidosAvgOrderByAggregateInput
    _max?: pedidosMaxOrderByAggregateInput
    _min?: pedidosMinOrderByAggregateInput
    _sum?: pedidosSumOrderByAggregateInput
  }

  export type pedidosScalarWhereWithAggregatesInput = {
    AND?: pedidosScalarWhereWithAggregatesInput | pedidosScalarWhereWithAggregatesInput[]
    OR?: pedidosScalarWhereWithAggregatesInput[]
    NOT?: pedidosScalarWhereWithAggregatesInput | pedidosScalarWhereWithAggregatesInput[]
    id_ped?: IntWithAggregatesFilter<"pedidos"> | number
    data_ped?: DateTimeNullableWithAggregatesFilter<"pedidos"> | Date | string | null
    cpf_cli?: BigIntWithAggregatesFilter<"pedidos"> | bigint | number
    id_car_ped?: IntWithAggregatesFilter<"pedidos"> | number
    valor_ped?: DecimalNullableWithAggregatesFilter<"pedidos"> | Decimal | DecimalJsLike | number | string | null
    transp_ped?: StringNullableWithAggregatesFilter<"pedidos"> | string | null
    rastreio_ped?: StringNullableWithAggregatesFilter<"pedidos"> | string | null
    end_entrega_ped?: StringNullableWithAggregatesFilter<"pedidos"> | string | null
    ped_sem_pgto?: BoolNullableWithAggregatesFilter<"pedidos"> | boolean | null
  }

  export type produtosWhereInput = {
    AND?: produtosWhereInput | produtosWhereInput[]
    OR?: produtosWhereInput[]
    NOT?: produtosWhereInput | produtosWhereInput[]
    id_prod?: StringFilter<"produtos"> | string
    nome_prod?: StringNullableFilter<"produtos"> | string | null
    tipo_prod?: StringNullableFilter<"produtos"> | string | null
    descr_prod?: StringNullableFilter<"produtos"> | string | null
    valor_venda_prod?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    estoque_prod?: IntNullableFilter<"produtos"> | number | null
    custo_prod?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
  }

  export type produtosOrderByWithRelationInput = {
    id_prod?: SortOrder
    nome_prod?: SortOrderInput | SortOrder
    tipo_prod?: SortOrderInput | SortOrder
    descr_prod?: SortOrderInput | SortOrder
    valor_venda_prod?: SortOrderInput | SortOrder
    estoque_prod?: SortOrderInput | SortOrder
    custo_prod?: SortOrderInput | SortOrder
  }

  export type produtosWhereUniqueInput = Prisma.AtLeast<{
    id_prod?: string
    AND?: produtosWhereInput | produtosWhereInput[]
    OR?: produtosWhereInput[]
    NOT?: produtosWhereInput | produtosWhereInput[]
    nome_prod?: StringNullableFilter<"produtos"> | string | null
    tipo_prod?: StringNullableFilter<"produtos"> | string | null
    descr_prod?: StringNullableFilter<"produtos"> | string | null
    valor_venda_prod?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    estoque_prod?: IntNullableFilter<"produtos"> | number | null
    custo_prod?: DecimalNullableFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
  }, "id_prod">

  export type produtosOrderByWithAggregationInput = {
    id_prod?: SortOrder
    nome_prod?: SortOrderInput | SortOrder
    tipo_prod?: SortOrderInput | SortOrder
    descr_prod?: SortOrderInput | SortOrder
    valor_venda_prod?: SortOrderInput | SortOrder
    estoque_prod?: SortOrderInput | SortOrder
    custo_prod?: SortOrderInput | SortOrder
    _count?: produtosCountOrderByAggregateInput
    _avg?: produtosAvgOrderByAggregateInput
    _max?: produtosMaxOrderByAggregateInput
    _min?: produtosMinOrderByAggregateInput
    _sum?: produtosSumOrderByAggregateInput
  }

  export type produtosScalarWhereWithAggregatesInput = {
    AND?: produtosScalarWhereWithAggregatesInput | produtosScalarWhereWithAggregatesInput[]
    OR?: produtosScalarWhereWithAggregatesInput[]
    NOT?: produtosScalarWhereWithAggregatesInput | produtosScalarWhereWithAggregatesInput[]
    id_prod?: StringWithAggregatesFilter<"produtos"> | string
    nome_prod?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    tipo_prod?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    descr_prod?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    valor_venda_prod?: DecimalNullableWithAggregatesFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
    estoque_prod?: IntNullableWithAggregatesFilter<"produtos"> | number | null
    custo_prod?: DecimalNullableWithAggregatesFilter<"produtos"> | Decimal | DecimalJsLike | number | string | null
  }

  export type carrinhosCreateInput = {
    id_car: number
    prod_car: number
    qtd_prod_car?: number | null
    desconto_car?: Decimal | DecimalJsLike | number | string | null
  }

  export type carrinhosUncheckedCreateInput = {
    id_car: number
    prod_car: number
    qtd_prod_car?: number | null
    desconto_car?: Decimal | DecimalJsLike | number | string | null
  }

  export type carrinhosUpdateInput = {
    id_car?: IntFieldUpdateOperationsInput | number
    prod_car?: IntFieldUpdateOperationsInput | number
    qtd_prod_car?: NullableIntFieldUpdateOperationsInput | number | null
    desconto_car?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type carrinhosUncheckedUpdateInput = {
    id_car?: IntFieldUpdateOperationsInput | number
    prod_car?: IntFieldUpdateOperationsInput | number
    qtd_prod_car?: NullableIntFieldUpdateOperationsInput | number | null
    desconto_car?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type carrinhosCreateManyInput = {
    id_car: number
    prod_car: number
    qtd_prod_car?: number | null
    desconto_car?: Decimal | DecimalJsLike | number | string | null
  }

  export type carrinhosUpdateManyMutationInput = {
    id_car?: IntFieldUpdateOperationsInput | number
    prod_car?: IntFieldUpdateOperationsInput | number
    qtd_prod_car?: NullableIntFieldUpdateOperationsInput | number | null
    desconto_car?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type carrinhosUncheckedUpdateManyInput = {
    id_car?: IntFieldUpdateOperationsInput | number
    prod_car?: IntFieldUpdateOperationsInput | number
    qtd_prod_car?: NullableIntFieldUpdateOperationsInput | number | null
    desconto_car?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type clientesCreateInput = {
    cpf_cli: bigint | number
    nome_cli?: string | null
    email_cli?: string | null
    celular_cli?: string | null
    end_res_cli?: string | null
    senha_cli?: string | null
    data_cadastro_cli?: Date | string | null
    niver_cli?: Date | string | null
    trusted_cli?: boolean | null
  }

  export type clientesUncheckedCreateInput = {
    cpf_cli: bigint | number
    nome_cli?: string | null
    email_cli?: string | null
    celular_cli?: string | null
    end_res_cli?: string | null
    senha_cli?: string | null
    data_cadastro_cli?: Date | string | null
    niver_cli?: Date | string | null
    trusted_cli?: boolean | null
  }

  export type clientesUpdateInput = {
    cpf_cli?: BigIntFieldUpdateOperationsInput | bigint | number
    nome_cli?: NullableStringFieldUpdateOperationsInput | string | null
    email_cli?: NullableStringFieldUpdateOperationsInput | string | null
    celular_cli?: NullableStringFieldUpdateOperationsInput | string | null
    end_res_cli?: NullableStringFieldUpdateOperationsInput | string | null
    senha_cli?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro_cli?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    niver_cli?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trusted_cli?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type clientesUncheckedUpdateInput = {
    cpf_cli?: BigIntFieldUpdateOperationsInput | bigint | number
    nome_cli?: NullableStringFieldUpdateOperationsInput | string | null
    email_cli?: NullableStringFieldUpdateOperationsInput | string | null
    celular_cli?: NullableStringFieldUpdateOperationsInput | string | null
    end_res_cli?: NullableStringFieldUpdateOperationsInput | string | null
    senha_cli?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro_cli?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    niver_cli?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trusted_cli?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type clientesCreateManyInput = {
    cpf_cli: bigint | number
    nome_cli?: string | null
    email_cli?: string | null
    celular_cli?: string | null
    end_res_cli?: string | null
    senha_cli?: string | null
    data_cadastro_cli?: Date | string | null
    niver_cli?: Date | string | null
    trusted_cli?: boolean | null
  }

  export type clientesUpdateManyMutationInput = {
    cpf_cli?: BigIntFieldUpdateOperationsInput | bigint | number
    nome_cli?: NullableStringFieldUpdateOperationsInput | string | null
    email_cli?: NullableStringFieldUpdateOperationsInput | string | null
    celular_cli?: NullableStringFieldUpdateOperationsInput | string | null
    end_res_cli?: NullableStringFieldUpdateOperationsInput | string | null
    senha_cli?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro_cli?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    niver_cli?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trusted_cli?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type clientesUncheckedUpdateManyInput = {
    cpf_cli?: BigIntFieldUpdateOperationsInput | bigint | number
    nome_cli?: NullableStringFieldUpdateOperationsInput | string | null
    email_cli?: NullableStringFieldUpdateOperationsInput | string | null
    celular_cli?: NullableStringFieldUpdateOperationsInput | string | null
    end_res_cli?: NullableStringFieldUpdateOperationsInput | string | null
    senha_cli?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro_cli?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    niver_cli?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trusted_cli?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type pedidosCreateInput = {
    id_ped: number
    data_ped?: Date | string | null
    cpf_cli: bigint | number
    id_car_ped: number
    valor_ped?: Decimal | DecimalJsLike | number | string | null
    transp_ped?: string | null
    rastreio_ped?: string | null
    end_entrega_ped?: string | null
    ped_sem_pgto?: boolean | null
  }

  export type pedidosUncheckedCreateInput = {
    id_ped: number
    data_ped?: Date | string | null
    cpf_cli: bigint | number
    id_car_ped: number
    valor_ped?: Decimal | DecimalJsLike | number | string | null
    transp_ped?: string | null
    rastreio_ped?: string | null
    end_entrega_ped?: string | null
    ped_sem_pgto?: boolean | null
  }

  export type pedidosUpdateInput = {
    id_ped?: IntFieldUpdateOperationsInput | number
    data_ped?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cli?: BigIntFieldUpdateOperationsInput | bigint | number
    id_car_ped?: IntFieldUpdateOperationsInput | number
    valor_ped?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transp_ped?: NullableStringFieldUpdateOperationsInput | string | null
    rastreio_ped?: NullableStringFieldUpdateOperationsInput | string | null
    end_entrega_ped?: NullableStringFieldUpdateOperationsInput | string | null
    ped_sem_pgto?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type pedidosUncheckedUpdateInput = {
    id_ped?: IntFieldUpdateOperationsInput | number
    data_ped?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cli?: BigIntFieldUpdateOperationsInput | bigint | number
    id_car_ped?: IntFieldUpdateOperationsInput | number
    valor_ped?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transp_ped?: NullableStringFieldUpdateOperationsInput | string | null
    rastreio_ped?: NullableStringFieldUpdateOperationsInput | string | null
    end_entrega_ped?: NullableStringFieldUpdateOperationsInput | string | null
    ped_sem_pgto?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type pedidosCreateManyInput = {
    id_ped: number
    data_ped?: Date | string | null
    cpf_cli: bigint | number
    id_car_ped: number
    valor_ped?: Decimal | DecimalJsLike | number | string | null
    transp_ped?: string | null
    rastreio_ped?: string | null
    end_entrega_ped?: string | null
    ped_sem_pgto?: boolean | null
  }

  export type pedidosUpdateManyMutationInput = {
    id_ped?: IntFieldUpdateOperationsInput | number
    data_ped?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cli?: BigIntFieldUpdateOperationsInput | bigint | number
    id_car_ped?: IntFieldUpdateOperationsInput | number
    valor_ped?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transp_ped?: NullableStringFieldUpdateOperationsInput | string | null
    rastreio_ped?: NullableStringFieldUpdateOperationsInput | string | null
    end_entrega_ped?: NullableStringFieldUpdateOperationsInput | string | null
    ped_sem_pgto?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type pedidosUncheckedUpdateManyInput = {
    id_ped?: IntFieldUpdateOperationsInput | number
    data_ped?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf_cli?: BigIntFieldUpdateOperationsInput | bigint | number
    id_car_ped?: IntFieldUpdateOperationsInput | number
    valor_ped?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transp_ped?: NullableStringFieldUpdateOperationsInput | string | null
    rastreio_ped?: NullableStringFieldUpdateOperationsInput | string | null
    end_entrega_ped?: NullableStringFieldUpdateOperationsInput | string | null
    ped_sem_pgto?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type produtosCreateInput = {
    id_prod: string
    nome_prod?: string | null
    tipo_prod?: string | null
    descr_prod?: string | null
    valor_venda_prod?: Decimal | DecimalJsLike | number | string | null
    estoque_prod?: number | null
    custo_prod?: Decimal | DecimalJsLike | number | string | null
  }

  export type produtosUncheckedCreateInput = {
    id_prod: string
    nome_prod?: string | null
    tipo_prod?: string | null
    descr_prod?: string | null
    valor_venda_prod?: Decimal | DecimalJsLike | number | string | null
    estoque_prod?: number | null
    custo_prod?: Decimal | DecimalJsLike | number | string | null
  }

  export type produtosUpdateInput = {
    id_prod?: StringFieldUpdateOperationsInput | string
    nome_prod?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_prod?: NullableStringFieldUpdateOperationsInput | string | null
    descr_prod?: NullableStringFieldUpdateOperationsInput | string | null
    valor_venda_prod?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_prod?: NullableIntFieldUpdateOperationsInput | number | null
    custo_prod?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produtosUncheckedUpdateInput = {
    id_prod?: StringFieldUpdateOperationsInput | string
    nome_prod?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_prod?: NullableStringFieldUpdateOperationsInput | string | null
    descr_prod?: NullableStringFieldUpdateOperationsInput | string | null
    valor_venda_prod?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_prod?: NullableIntFieldUpdateOperationsInput | number | null
    custo_prod?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produtosCreateManyInput = {
    id_prod: string
    nome_prod?: string | null
    tipo_prod?: string | null
    descr_prod?: string | null
    valor_venda_prod?: Decimal | DecimalJsLike | number | string | null
    estoque_prod?: number | null
    custo_prod?: Decimal | DecimalJsLike | number | string | null
  }

  export type produtosUpdateManyMutationInput = {
    id_prod?: StringFieldUpdateOperationsInput | string
    nome_prod?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_prod?: NullableStringFieldUpdateOperationsInput | string | null
    descr_prod?: NullableStringFieldUpdateOperationsInput | string | null
    valor_venda_prod?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_prod?: NullableIntFieldUpdateOperationsInput | number | null
    custo_prod?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produtosUncheckedUpdateManyInput = {
    id_prod?: StringFieldUpdateOperationsInput | string
    nome_prod?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_prod?: NullableStringFieldUpdateOperationsInput | string | null
    descr_prod?: NullableStringFieldUpdateOperationsInput | string | null
    valor_venda_prod?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque_prod?: NullableIntFieldUpdateOperationsInput | number | null
    custo_prod?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type carrinhosId_carProd_carCompoundUniqueInput = {
    id_car: number
    prod_car: number
  }

  export type carrinhosCountOrderByAggregateInput = {
    id_car?: SortOrder
    prod_car?: SortOrder
    qtd_prod_car?: SortOrder
    desconto_car?: SortOrder
  }

  export type carrinhosAvgOrderByAggregateInput = {
    id_car?: SortOrder
    prod_car?: SortOrder
    qtd_prod_car?: SortOrder
    desconto_car?: SortOrder
  }

  export type carrinhosMaxOrderByAggregateInput = {
    id_car?: SortOrder
    prod_car?: SortOrder
    qtd_prod_car?: SortOrder
    desconto_car?: SortOrder
  }

  export type carrinhosMinOrderByAggregateInput = {
    id_car?: SortOrder
    prod_car?: SortOrder
    qtd_prod_car?: SortOrder
    desconto_car?: SortOrder
  }

  export type carrinhosSumOrderByAggregateInput = {
    id_car?: SortOrder
    prod_car?: SortOrder
    qtd_prod_car?: SortOrder
    desconto_car?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type clientesCountOrderByAggregateInput = {
    cpf_cli?: SortOrder
    nome_cli?: SortOrder
    email_cli?: SortOrder
    celular_cli?: SortOrder
    end_res_cli?: SortOrder
    senha_cli?: SortOrder
    data_cadastro_cli?: SortOrder
    niver_cli?: SortOrder
    trusted_cli?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    cpf_cli?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    cpf_cli?: SortOrder
    nome_cli?: SortOrder
    email_cli?: SortOrder
    celular_cli?: SortOrder
    end_res_cli?: SortOrder
    senha_cli?: SortOrder
    data_cadastro_cli?: SortOrder
    niver_cli?: SortOrder
    trusted_cli?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    cpf_cli?: SortOrder
    nome_cli?: SortOrder
    email_cli?: SortOrder
    celular_cli?: SortOrder
    end_res_cli?: SortOrder
    senha_cli?: SortOrder
    data_cadastro_cli?: SortOrder
    niver_cli?: SortOrder
    trusted_cli?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    cpf_cli?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type pedidosId_pedId_car_pedCpf_cliCompoundUniqueInput = {
    id_ped: number
    id_car_ped: number
    cpf_cli: bigint | number
  }

  export type pedidosCountOrderByAggregateInput = {
    id_ped?: SortOrder
    data_ped?: SortOrder
    cpf_cli?: SortOrder
    id_car_ped?: SortOrder
    valor_ped?: SortOrder
    transp_ped?: SortOrder
    rastreio_ped?: SortOrder
    end_entrega_ped?: SortOrder
    ped_sem_pgto?: SortOrder
  }

  export type pedidosAvgOrderByAggregateInput = {
    id_ped?: SortOrder
    cpf_cli?: SortOrder
    id_car_ped?: SortOrder
    valor_ped?: SortOrder
  }

  export type pedidosMaxOrderByAggregateInput = {
    id_ped?: SortOrder
    data_ped?: SortOrder
    cpf_cli?: SortOrder
    id_car_ped?: SortOrder
    valor_ped?: SortOrder
    transp_ped?: SortOrder
    rastreio_ped?: SortOrder
    end_entrega_ped?: SortOrder
    ped_sem_pgto?: SortOrder
  }

  export type pedidosMinOrderByAggregateInput = {
    id_ped?: SortOrder
    data_ped?: SortOrder
    cpf_cli?: SortOrder
    id_car_ped?: SortOrder
    valor_ped?: SortOrder
    transp_ped?: SortOrder
    rastreio_ped?: SortOrder
    end_entrega_ped?: SortOrder
    ped_sem_pgto?: SortOrder
  }

  export type pedidosSumOrderByAggregateInput = {
    id_ped?: SortOrder
    cpf_cli?: SortOrder
    id_car_ped?: SortOrder
    valor_ped?: SortOrder
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

  export type produtosCountOrderByAggregateInput = {
    id_prod?: SortOrder
    nome_prod?: SortOrder
    tipo_prod?: SortOrder
    descr_prod?: SortOrder
    valor_venda_prod?: SortOrder
    estoque_prod?: SortOrder
    custo_prod?: SortOrder
  }

  export type produtosAvgOrderByAggregateInput = {
    valor_venda_prod?: SortOrder
    estoque_prod?: SortOrder
    custo_prod?: SortOrder
  }

  export type produtosMaxOrderByAggregateInput = {
    id_prod?: SortOrder
    nome_prod?: SortOrder
    tipo_prod?: SortOrder
    descr_prod?: SortOrder
    valor_venda_prod?: SortOrder
    estoque_prod?: SortOrder
    custo_prod?: SortOrder
  }

  export type produtosMinOrderByAggregateInput = {
    id_prod?: SortOrder
    nome_prod?: SortOrder
    tipo_prod?: SortOrder
    descr_prod?: SortOrder
    valor_venda_prod?: SortOrder
    estoque_prod?: SortOrder
    custo_prod?: SortOrder
  }

  export type produtosSumOrderByAggregateInput = {
    valor_venda_prod?: SortOrder
    estoque_prod?: SortOrder
    custo_prod?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use carrinhosDefaultArgs instead
     */
    export type carrinhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = carrinhosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clientesDefaultArgs instead
     */
    export type clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clientesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pedidosDefaultArgs instead
     */
    export type pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pedidosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use produtosDefaultArgs instead
     */
    export type produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = produtosDefaultArgs<ExtArgs>

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