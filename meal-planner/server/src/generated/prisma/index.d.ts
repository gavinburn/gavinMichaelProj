
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model MealPlan
 * 
 */
export type MealPlan = $Result.DefaultSelection<Prisma.$MealPlanPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FitnessGoal: {
  BULKING: 'BULKING',
  CUTTING: 'CUTTING',
  MAINTAINING: 'MAINTAINING'
};

export type FitnessGoal = (typeof FitnessGoal)[keyof typeof FitnessGoal]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const FitnessLevel: {
  SEDENTARY: 'SEDENTARY',
  LIGHT: 'LIGHT',
  MODERATE: 'MODERATE',
  ACTIVE: 'ACTIVE',
  VERY_ACTIVE: 'VERY_ACTIVE'
};

export type FitnessLevel = (typeof FitnessLevel)[keyof typeof FitnessLevel]


export const PlanStatus: {
  ACTIVE: 'ACTIVE',
  DONE: 'DONE'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]

}

export type FitnessGoal = $Enums.FitnessGoal

export const FitnessGoal: typeof $Enums.FitnessGoal

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type FitnessLevel = $Enums.FitnessLevel

export const FitnessLevel: typeof $Enums.FitnessLevel

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealPlan`: Exposes CRUD operations for the **MealPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealPlans
    * const mealPlans = await prisma.mealPlan.findMany()
    * ```
    */
  get mealPlan(): Prisma.MealPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    User: 'User',
    Ingredient: 'Ingredient',
    MealPlan: 'MealPlan',
    Favorite: 'Favorite'
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
      modelProps: "user" | "ingredient" | "mealPlan" | "favorite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      MealPlan: {
        payload: Prisma.$MealPlanPayload<ExtArgs>
        fields: Prisma.MealPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findFirst: {
            args: Prisma.MealPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findMany: {
            args: Prisma.MealPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          create: {
            args: Prisma.MealPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          createMany: {
            args: Prisma.MealPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          delete: {
            args: Prisma.MealPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          update: {
            args: Prisma.MealPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          deleteMany: {
            args: Prisma.MealPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          upsert: {
            args: Prisma.MealPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          aggregate: {
            args: Prisma.MealPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealPlan>
          }
          groupBy: {
            args: Prisma.MealPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MealPlanCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
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
    user?: UserOmit
    ingredient?: IngredientOmit
    mealPlan?: MealPlanOmit
    favorite?: FavoriteOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Ingredient: number
    MealPlan: number
    Favorite: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ingredient?: boolean | UserCountOutputTypeCountIngredientArgs
    MealPlan?: boolean | UserCountOutputTypeCountMealPlanArgs
    Favorite?: boolean | UserCountOutputTypeCountFavoriteArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type MealPlanCountOutputType
   */

  export type MealPlanCountOutputType = {
    Favorite: number
  }

  export type MealPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favorite?: boolean | MealPlanCountOutputTypeCountFavoriteArgs
  }

  // Custom InputTypes
  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanCountOutputType
     */
    select?: MealPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    weight: number | null
  }

  export type UserSumAggregateOutputType = {
    weight: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    weight: number | null
    fitnessGoal: $Enums.FitnessGoal | null
    gender: $Enums.Gender | null
    fitnessLevel: $Enums.FitnessLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    weight: number | null
    fitnessGoal: $Enums.FitnessGoal | null
    gender: $Enums.Gender | null
    fitnessLevel: $Enums.FitnessLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    weight: number
    fitnessGoal: number
    gender: number
    fitnessLevel: number
    favoriteCuisines: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    weight?: true
  }

  export type UserSumAggregateInputType = {
    weight?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    weight?: true
    fitnessGoal?: true
    gender?: true
    fitnessLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    weight?: true
    fitnessGoal?: true
    gender?: true
    fitnessLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    weight?: true
    fitnessGoal?: true
    gender?: true
    fitnessLevel?: true
    favoriteCuisines?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    weight?: boolean
    fitnessGoal?: boolean
    gender?: boolean
    fitnessLevel?: boolean
    favoriteCuisines?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Ingredient?: boolean | User$IngredientArgs<ExtArgs>
    MealPlan?: boolean | User$MealPlanArgs<ExtArgs>
    Favorite?: boolean | User$FavoriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    weight?: boolean
    fitnessGoal?: boolean
    gender?: boolean
    fitnessLevel?: boolean
    favoriteCuisines?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    weight?: boolean
    fitnessGoal?: boolean
    gender?: boolean
    fitnessLevel?: boolean
    favoriteCuisines?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    weight?: boolean
    fitnessGoal?: boolean
    gender?: boolean
    fitnessLevel?: boolean
    favoriteCuisines?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "weight" | "fitnessGoal" | "gender" | "fitnessLevel" | "favoriteCuisines" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ingredient?: boolean | User$IngredientArgs<ExtArgs>
    MealPlan?: boolean | User$MealPlanArgs<ExtArgs>
    Favorite?: boolean | User$FavoriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Ingredient: Prisma.$IngredientPayload<ExtArgs>[]
      MealPlan: Prisma.$MealPlanPayload<ExtArgs>[]
      Favorite: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      weight: number
      fitnessGoal: $Enums.FitnessGoal
      gender: $Enums.Gender
      fitnessLevel: $Enums.FitnessLevel
      favoriteCuisines: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ingredient<T extends User$IngredientArgs<ExtArgs> = {}>(args?: Subset<T, User$IngredientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MealPlan<T extends User$MealPlanArgs<ExtArgs> = {}>(args?: Subset<T, User$MealPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Favorite<T extends User$FavoriteArgs<ExtArgs> = {}>(args?: Subset<T, User$FavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly fitnessGoal: FieldRef<"User", 'FitnessGoal'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly fitnessLevel: FieldRef<"User", 'FitnessLevel'>
    readonly favoriteCuisines: FieldRef<"User", 'String[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Ingredient
   */
  export type User$IngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * User.MealPlan
   */
  export type User$MealPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    cursor?: MealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * User.Favorite
   */
  export type User$FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    quantity: number | null
  }

  export type IngredientSumAggregateOutputType = {
    quantity: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    quantity: number | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    quantity: number | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    quantity: number
    unit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    quantity?: true
  }

  export type IngredientSumAggregateInputType = {
    quantity?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    userId: string
    name: string
    quantity: number
    unit: string
    createdAt: Date
    updatedAt: Date
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "quantity" | "unit" | "createdAt" | "updatedAt", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      quantity: number
      unit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly userId: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly quantity: FieldRef<"Ingredient", 'Float'>
    readonly unit: FieldRef<"Ingredient", 'String'>
    readonly createdAt: FieldRef<"Ingredient", 'DateTime'>
    readonly updatedAt: FieldRef<"Ingredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model MealPlan
   */

  export type AggregateMealPlan = {
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  export type MealPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealPlanCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    status: number
    planJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealPlanMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealPlanCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    status?: true
    planJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlan to aggregate.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealPlans
    **/
    _count?: true | MealPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealPlanMaxAggregateInputType
  }

  export type GetMealPlanAggregateType<T extends MealPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMealPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealPlan[P]>
      : GetScalarType<T[P], AggregateMealPlan[P]>
  }




  export type MealPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithAggregationInput | MealPlanOrderByWithAggregationInput[]
    by: MealPlanScalarFieldEnum[] | MealPlanScalarFieldEnum
    having?: MealPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealPlanCountAggregateInputType | true
    _min?: MealPlanMinAggregateInputType
    _max?: MealPlanMaxAggregateInputType
  }

  export type MealPlanGroupByOutputType = {
    id: string
    userId: string
    name: string
    status: $Enums.PlanStatus
    planJson: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  type GetMealPlanGroupByPayload<T extends MealPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
        }
      >
    >


  export type MealPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    status?: boolean
    planJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Favorite?: boolean | MealPlan$FavoriteArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    status?: boolean
    planJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    status?: boolean
    planJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    status?: boolean
    planJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MealPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "status" | "planJson" | "createdAt" | "updatedAt", ExtArgs["result"]["mealPlan"]>
  export type MealPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Favorite?: boolean | MealPlan$FavoriteArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Favorite: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      status: $Enums.PlanStatus
      planJson: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mealPlan"]>
    composites: {}
  }

  type MealPlanGetPayload<S extends boolean | null | undefined | MealPlanDefaultArgs> = $Result.GetResult<Prisma.$MealPlanPayload, S>

  type MealPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealPlanCountAggregateInputType | true
    }

  export interface MealPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealPlan'], meta: { name: 'MealPlan' } }
    /**
     * Find zero or one MealPlan that matches the filter.
     * @param {MealPlanFindUniqueArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealPlanFindUniqueArgs>(args: SelectSubset<T, MealPlanFindUniqueArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealPlanFindUniqueOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MealPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealPlanFindFirstArgs>(args?: SelectSubset<T, MealPlanFindFirstArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MealPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealPlans
     * const mealPlans = await prisma.mealPlan.findMany()
     * 
     * // Get first 10 MealPlans
     * const mealPlans = await prisma.mealPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealPlanFindManyArgs>(args?: SelectSubset<T, MealPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealPlan.
     * @param {MealPlanCreateArgs} args - Arguments to create a MealPlan.
     * @example
     * // Create one MealPlan
     * const MealPlan = await prisma.mealPlan.create({
     *   data: {
     *     // ... data to create a MealPlan
     *   }
     * })
     * 
     */
    create<T extends MealPlanCreateArgs>(args: SelectSubset<T, MealPlanCreateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealPlans.
     * @param {MealPlanCreateManyArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealPlanCreateManyArgs>(args?: SelectSubset<T, MealPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealPlans and returns the data saved in the database.
     * @param {MealPlanCreateManyAndReturnArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, MealPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealPlan.
     * @param {MealPlanDeleteArgs} args - Arguments to delete one MealPlan.
     * @example
     * // Delete one MealPlan
     * const MealPlan = await prisma.mealPlan.delete({
     *   where: {
     *     // ... filter to delete one MealPlan
     *   }
     * })
     * 
     */
    delete<T extends MealPlanDeleteArgs>(args: SelectSubset<T, MealPlanDeleteArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealPlan.
     * @param {MealPlanUpdateArgs} args - Arguments to update one MealPlan.
     * @example
     * // Update one MealPlan
     * const mealPlan = await prisma.mealPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealPlanUpdateArgs>(args: SelectSubset<T, MealPlanUpdateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealPlans.
     * @param {MealPlanDeleteManyArgs} args - Arguments to filter MealPlans to delete.
     * @example
     * // Delete a few MealPlans
     * const { count } = await prisma.mealPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealPlanDeleteManyArgs>(args?: SelectSubset<T, MealPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealPlanUpdateManyArgs>(args: SelectSubset<T, MealPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans and returns the data updated in the database.
     * @param {MealPlanUpdateManyAndReturnArgs} args - Arguments to update many MealPlans.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, MealPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealPlan.
     * @param {MealPlanUpsertArgs} args - Arguments to update or create a MealPlan.
     * @example
     * // Update or create a MealPlan
     * const mealPlan = await prisma.mealPlan.upsert({
     *   create: {
     *     // ... data to create a MealPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealPlan we want to update
     *   }
     * })
     */
    upsert<T extends MealPlanUpsertArgs>(args: SelectSubset<T, MealPlanUpsertArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanCountArgs} args - Arguments to filter MealPlans to count.
     * @example
     * // Count the number of MealPlans
     * const count = await prisma.mealPlan.count({
     *   where: {
     *     // ... the filter for the MealPlans we want to count
     *   }
     * })
    **/
    count<T extends MealPlanCountArgs>(
      args?: Subset<T, MealPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealPlanAggregateArgs>(args: Subset<T, MealPlanAggregateArgs>): Prisma.PrismaPromise<GetMealPlanAggregateType<T>>

    /**
     * Group by MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanGroupByArgs} args - Group by arguments.
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
      T extends MealPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealPlanGroupByArgs['orderBy'] }
        : { orderBy?: MealPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealPlan model
   */
  readonly fields: MealPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Favorite<T extends MealPlan$FavoriteArgs<ExtArgs> = {}>(args?: Subset<T, MealPlan$FavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MealPlan model
   */
  interface MealPlanFieldRefs {
    readonly id: FieldRef<"MealPlan", 'String'>
    readonly userId: FieldRef<"MealPlan", 'String'>
    readonly name: FieldRef<"MealPlan", 'String'>
    readonly status: FieldRef<"MealPlan", 'PlanStatus'>
    readonly planJson: FieldRef<"MealPlan", 'Json'>
    readonly createdAt: FieldRef<"MealPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"MealPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealPlan findUnique
   */
  export type MealPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findUniqueOrThrow
   */
  export type MealPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findFirst
   */
  export type MealPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findFirstOrThrow
   */
  export type MealPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findMany
   */
  export type MealPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlans to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan create
   */
  export type MealPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MealPlan.
     */
    data: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
  }

  /**
   * MealPlan createMany
   */
  export type MealPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlan createManyAndReturn
   */
  export type MealPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan update
   */
  export type MealPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MealPlan.
     */
    data: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
    /**
     * Choose, which MealPlan to update.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan updateMany
   */
  export type MealPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
  }

  /**
   * MealPlan updateManyAndReturn
   */
  export type MealPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan upsert
   */
  export type MealPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MealPlan to update in case it exists.
     */
    where: MealPlanWhereUniqueInput
    /**
     * In case the MealPlan found by the `where` argument doesn't exist, create a new MealPlan with this data.
     */
    create: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
    /**
     * In case the MealPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
  }

  /**
   * MealPlan delete
   */
  export type MealPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter which MealPlan to delete.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan deleteMany
   */
  export type MealPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlans to delete
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to delete.
     */
    limit?: number
  }

  /**
   * MealPlan.Favorite
   */
  export type MealPlan$FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * MealPlan without action
   */
  export type MealPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    planId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$MealPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends MealPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealPlanDefaultArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly planId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    weight: 'weight',
    fitnessGoal: 'fitnessGoal',
    gender: 'gender',
    fitnessLevel: 'fitnessLevel',
    favoriteCuisines: 'favoriteCuisines',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    quantity: 'quantity',
    unit: 'unit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const MealPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    status: 'status',
    planJson: 'planJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealPlanScalarFieldEnum = (typeof MealPlanScalarFieldEnum)[keyof typeof MealPlanScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FitnessGoal'
   */
  export type EnumFitnessGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FitnessGoal'>
    


  /**
   * Reference to a field of type 'FitnessGoal[]'
   */
  export type ListEnumFitnessGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FitnessGoal[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'FitnessLevel'
   */
  export type EnumFitnessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FitnessLevel'>
    


  /**
   * Reference to a field of type 'FitnessLevel[]'
   */
  export type ListEnumFitnessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FitnessLevel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    weight?: FloatFilter<"User"> | number
    fitnessGoal?: EnumFitnessGoalFilter<"User"> | $Enums.FitnessGoal
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFilter<"User"> | $Enums.FitnessLevel
    favoriteCuisines?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Ingredient?: IngredientListRelationFilter
    MealPlan?: MealPlanListRelationFilter
    Favorite?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    weight?: SortOrder
    fitnessGoal?: SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    favoriteCuisines?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Ingredient?: IngredientOrderByRelationAggregateInput
    MealPlan?: MealPlanOrderByRelationAggregateInput
    Favorite?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    weight?: FloatFilter<"User"> | number
    fitnessGoal?: EnumFitnessGoalFilter<"User"> | $Enums.FitnessGoal
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFilter<"User"> | $Enums.FitnessLevel
    favoriteCuisines?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Ingredient?: IngredientListRelationFilter
    MealPlan?: MealPlanListRelationFilter
    Favorite?: FavoriteListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    weight?: SortOrder
    fitnessGoal?: SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    favoriteCuisines?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    weight?: FloatWithAggregatesFilter<"User"> | number
    fitnessGoal?: EnumFitnessGoalWithAggregatesFilter<"User"> | $Enums.FitnessGoal
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelWithAggregatesFilter<"User"> | $Enums.FitnessLevel
    favoriteCuisines?: StringNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    userId?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    quantity?: FloatFilter<"Ingredient"> | number
    unit?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    userId?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    quantity?: FloatFilter<"Ingredient"> | number
    unit?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    userId?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    quantity?: FloatWithAggregatesFilter<"Ingredient"> | number
    unit?: StringWithAggregatesFilter<"Ingredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
  }

  export type MealPlanWhereInput = {
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    userId?: StringFilter<"MealPlan"> | string
    name?: StringFilter<"MealPlan"> | string
    status?: EnumPlanStatusFilter<"MealPlan"> | $Enums.PlanStatus
    planJson?: JsonFilter<"MealPlan">
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Favorite?: FavoriteListRelationFilter
  }

  export type MealPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    planJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Favorite?: FavoriteOrderByRelationAggregateInput
  }

  export type MealPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    userId?: StringFilter<"MealPlan"> | string
    name?: StringFilter<"MealPlan"> | string
    status?: EnumPlanStatusFilter<"MealPlan"> | $Enums.PlanStatus
    planJson?: JsonFilter<"MealPlan">
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Favorite?: FavoriteListRelationFilter
  }, "id">

  export type MealPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    planJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealPlanCountOrderByAggregateInput
    _max?: MealPlanMaxOrderByAggregateInput
    _min?: MealPlanMinOrderByAggregateInput
  }

  export type MealPlanScalarWhereWithAggregatesInput = {
    AND?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    OR?: MealPlanScalarWhereWithAggregatesInput[]
    NOT?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealPlan"> | string
    userId?: StringWithAggregatesFilter<"MealPlan"> | string
    name?: StringWithAggregatesFilter<"MealPlan"> | string
    status?: EnumPlanStatusWithAggregatesFilter<"MealPlan"> | $Enums.PlanStatus
    planJson?: JsonWithAggregatesFilter<"MealPlan">
    createdAt?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    planId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: MealPlanOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_planId?: FavoriteUserIdPlanIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    planId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
  }, "id" | "userId_planId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    planId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Ingredient?: IngredientCreateNestedManyWithoutUserInput
    MealPlan?: MealPlanCreateNestedManyWithoutUserInput
    Favorite?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Ingredient?: IngredientUncheckedCreateNestedManyWithoutUserInput
    MealPlan?: MealPlanUncheckedCreateNestedManyWithoutUserInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ingredient?: IngredientUpdateManyWithoutUserNestedInput
    MealPlan?: MealPlanUpdateManyWithoutUserNestedInput
    Favorite?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ingredient?: IngredientUncheckedUpdateManyWithoutUserNestedInput
    MealPlan?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateManyInput = {
    id?: string
    userId: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanCreateInput = {
    id?: string
    name: string
    status?: $Enums.PlanStatus
    planJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealPlanInput
    Favorite?: FavoriteCreateNestedManyWithoutPlanInput
  }

  export type MealPlanUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    status?: $Enums.PlanStatus
    planJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutPlanInput
  }

  export type MealPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealPlanNestedInput
    Favorite?: FavoriteUpdateManyWithoutPlanNestedInput
  }

  export type MealPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type MealPlanCreateManyInput = {
    id?: string
    userId: string
    name: string
    status?: $Enums.PlanStatus
    planJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteInput
    plan: MealPlanCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    planId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteNestedInput
    plan?: MealPlanUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    planId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumFitnessGoalFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessGoal | EnumFitnessGoalFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessGoal[] | ListEnumFitnessGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessGoal[] | ListEnumFitnessGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessGoalFilter<$PrismaModel> | $Enums.FitnessGoal
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumFitnessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelFilter<$PrismaModel> | $Enums.FitnessLevel
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

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type MealPlanListRelationFilter = {
    every?: MealPlanWhereInput
    some?: MealPlanWhereInput
    none?: MealPlanWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    weight?: SortOrder
    fitnessGoal?: SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    favoriteCuisines?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    weight?: SortOrder
    fitnessGoal?: SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    weight?: SortOrder
    fitnessGoal?: SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    weight?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFitnessGoalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessGoal | EnumFitnessGoalFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessGoal[] | ListEnumFitnessGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessGoal[] | ListEnumFitnessGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessGoalWithAggregatesFilter<$PrismaModel> | $Enums.FitnessGoal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFitnessGoalFilter<$PrismaModel>
    _max?: NestedEnumFitnessGoalFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumFitnessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel> | $Enums.FitnessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFitnessLevelFilter<$PrismaModel>
    _max?: NestedEnumFitnessLevelFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MealPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    planJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type MealPlanScalarRelationFilter = {
    is?: MealPlanWhereInput
    isNot?: MealPlanWhereInput
  }

  export type FavoriteUserIdPlanIdCompoundUniqueInput = {
    userId: string
    planId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreatefavoriteCuisinesInput = {
    set: string[]
  }

  export type IngredientCreateNestedManyWithoutUserInput = {
    create?: XOR<IngredientCreateWithoutUserInput, IngredientUncheckedCreateWithoutUserInput> | IngredientCreateWithoutUserInput[] | IngredientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutUserInput | IngredientCreateOrConnectWithoutUserInput[]
    createMany?: IngredientCreateManyUserInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type MealPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IngredientCreateWithoutUserInput, IngredientUncheckedCreateWithoutUserInput> | IngredientCreateWithoutUserInput[] | IngredientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutUserInput | IngredientCreateOrConnectWithoutUserInput[]
    createMany?: IngredientCreateManyUserInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type MealPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFitnessGoalFieldUpdateOperationsInput = {
    set?: $Enums.FitnessGoal
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumFitnessLevelFieldUpdateOperationsInput = {
    set?: $Enums.FitnessLevel
  }

  export type UserUpdatefavoriteCuisinesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IngredientUpdateManyWithoutUserNestedInput = {
    create?: XOR<IngredientCreateWithoutUserInput, IngredientUncheckedCreateWithoutUserInput> | IngredientCreateWithoutUserInput[] | IngredientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutUserInput | IngredientCreateOrConnectWithoutUserInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutUserInput | IngredientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IngredientCreateManyUserInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutUserInput | IngredientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutUserInput | IngredientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type MealPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IngredientCreateWithoutUserInput, IngredientUncheckedCreateWithoutUserInput> | IngredientCreateWithoutUserInput[] | IngredientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutUserInput | IngredientCreateOrConnectWithoutUserInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutUserInput | IngredientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IngredientCreateManyUserInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutUserInput | IngredientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutUserInput | IngredientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type MealPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIngredientInput = {
    create?: XOR<UserCreateWithoutIngredientInput, UserUncheckedCreateWithoutIngredientInput>
    connectOrCreate?: UserCreateOrConnectWithoutIngredientInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutIngredientNestedInput = {
    create?: XOR<UserCreateWithoutIngredientInput, UserUncheckedCreateWithoutIngredientInput>
    connectOrCreate?: UserCreateOrConnectWithoutIngredientInput
    upsert?: UserUpsertWithoutIngredientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIngredientInput, UserUpdateWithoutIngredientInput>, UserUncheckedUpdateWithoutIngredientInput>
  }

  export type UserCreateNestedOneWithoutMealPlanInput = {
    create?: XOR<UserCreateWithoutMealPlanInput, UserUncheckedCreateWithoutMealPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealPlanInput
    connect?: UserWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutPlanInput = {
    create?: XOR<FavoriteCreateWithoutPlanInput, FavoriteUncheckedCreateWithoutPlanInput> | FavoriteCreateWithoutPlanInput[] | FavoriteUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPlanInput | FavoriteCreateOrConnectWithoutPlanInput[]
    createMany?: FavoriteCreateManyPlanInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<FavoriteCreateWithoutPlanInput, FavoriteUncheckedCreateWithoutPlanInput> | FavoriteCreateWithoutPlanInput[] | FavoriteUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPlanInput | FavoriteCreateOrConnectWithoutPlanInput[]
    createMany?: FavoriteCreateManyPlanInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type UserUpdateOneRequiredWithoutMealPlanNestedInput = {
    create?: XOR<UserCreateWithoutMealPlanInput, UserUncheckedCreateWithoutMealPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealPlanInput
    upsert?: UserUpsertWithoutMealPlanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealPlanInput, UserUpdateWithoutMealPlanInput>, UserUncheckedUpdateWithoutMealPlanInput>
  }

  export type FavoriteUpdateManyWithoutPlanNestedInput = {
    create?: XOR<FavoriteCreateWithoutPlanInput, FavoriteUncheckedCreateWithoutPlanInput> | FavoriteCreateWithoutPlanInput[] | FavoriteUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPlanInput | FavoriteCreateOrConnectWithoutPlanInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPlanInput | FavoriteUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: FavoriteCreateManyPlanInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPlanInput | FavoriteUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPlanInput | FavoriteUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<FavoriteCreateWithoutPlanInput, FavoriteUncheckedCreateWithoutPlanInput> | FavoriteCreateWithoutPlanInput[] | FavoriteUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPlanInput | FavoriteCreateOrConnectWithoutPlanInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPlanInput | FavoriteUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: FavoriteCreateManyPlanInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPlanInput | FavoriteUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPlanInput | FavoriteUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    connect?: UserWhereUniqueInput
  }

  export type MealPlanCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<MealPlanCreateWithoutFavoriteInput, MealPlanUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutFavoriteInput
    connect?: MealPlanWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    upsert?: UserUpsertWithoutFavoriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteInput, UserUpdateWithoutFavoriteInput>, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type MealPlanUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<MealPlanCreateWithoutFavoriteInput, MealPlanUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutFavoriteInput
    upsert?: MealPlanUpsertWithoutFavoriteInput
    connect?: MealPlanWhereUniqueInput
    update?: XOR<XOR<MealPlanUpdateToOneWithWhereWithoutFavoriteInput, MealPlanUpdateWithoutFavoriteInput>, MealPlanUncheckedUpdateWithoutFavoriteInput>
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

  export type NestedEnumFitnessGoalFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessGoal | EnumFitnessGoalFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessGoal[] | ListEnumFitnessGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessGoal[] | ListEnumFitnessGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessGoalFilter<$PrismaModel> | $Enums.FitnessGoal
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumFitnessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelFilter<$PrismaModel> | $Enums.FitnessLevel
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFitnessGoalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessGoal | EnumFitnessGoalFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessGoal[] | ListEnumFitnessGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessGoal[] | ListEnumFitnessGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessGoalWithAggregatesFilter<$PrismaModel> | $Enums.FitnessGoal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFitnessGoalFilter<$PrismaModel>
    _max?: NestedEnumFitnessGoalFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel> | $Enums.FitnessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFitnessLevelFilter<$PrismaModel>
    _max?: NestedEnumFitnessLevelFilter<$PrismaModel>
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

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IngredientCreateWithoutUserInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientCreateOrConnectWithoutUserInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutUserInput, IngredientUncheckedCreateWithoutUserInput>
  }

  export type IngredientCreateManyUserInputEnvelope = {
    data: IngredientCreateManyUserInput | IngredientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealPlanCreateWithoutUserInput = {
    id?: string
    name: string
    status?: $Enums.PlanStatus
    planJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Favorite?: FavoriteCreateNestedManyWithoutPlanInput
  }

  export type MealPlanUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    status?: $Enums.PlanStatus
    planJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutPlanInput
  }

  export type MealPlanCreateOrConnectWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanCreateManyUserInputEnvelope = {
    data: MealPlanCreateManyUserInput | MealPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    plan: MealPlanCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IngredientUpsertWithWhereUniqueWithoutUserInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutUserInput, IngredientUncheckedUpdateWithoutUserInput>
    create: XOR<IngredientCreateWithoutUserInput, IngredientUncheckedCreateWithoutUserInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutUserInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutUserInput, IngredientUncheckedUpdateWithoutUserInput>
  }

  export type IngredientUpdateManyWithWhereWithoutUserInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutUserInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    OR?: IngredientScalarWhereInput[]
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    userId?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    quantity?: FloatFilter<"Ingredient"> | number
    unit?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
  }

  export type MealPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    update: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    data: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
  }

  export type MealPlanUpdateManyWithWhereWithoutUserInput = {
    where: MealPlanScalarWhereInput
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type MealPlanScalarWhereInput = {
    AND?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    OR?: MealPlanScalarWhereInput[]
    NOT?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    userId?: StringFilter<"MealPlan"> | string
    name?: StringFilter<"MealPlan"> | string
    status?: EnumPlanStatusFilter<"MealPlan"> | $Enums.PlanStatus
    planJson?: JsonFilter<"MealPlan">
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    planId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type UserCreateWithoutIngredientInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    MealPlan?: MealPlanCreateNestedManyWithoutUserInput
    Favorite?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIngredientInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    MealPlan?: MealPlanUncheckedCreateNestedManyWithoutUserInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIngredientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIngredientInput, UserUncheckedCreateWithoutIngredientInput>
  }

  export type UserUpsertWithoutIngredientInput = {
    update: XOR<UserUpdateWithoutIngredientInput, UserUncheckedUpdateWithoutIngredientInput>
    create: XOR<UserCreateWithoutIngredientInput, UserUncheckedCreateWithoutIngredientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIngredientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIngredientInput, UserUncheckedUpdateWithoutIngredientInput>
  }

  export type UserUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MealPlan?: MealPlanUpdateManyWithoutUserNestedInput
    Favorite?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MealPlan?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMealPlanInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Ingredient?: IngredientCreateNestedManyWithoutUserInput
    Favorite?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealPlanInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Ingredient?: IngredientUncheckedCreateNestedManyWithoutUserInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealPlanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealPlanInput, UserUncheckedCreateWithoutMealPlanInput>
  }

  export type FavoriteCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutPlanInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutPlanInput, FavoriteUncheckedCreateWithoutPlanInput>
  }

  export type FavoriteCreateManyPlanInputEnvelope = {
    data: FavoriteCreateManyPlanInput | FavoriteCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMealPlanInput = {
    update: XOR<UserUpdateWithoutMealPlanInput, UserUncheckedUpdateWithoutMealPlanInput>
    create: XOR<UserCreateWithoutMealPlanInput, UserUncheckedCreateWithoutMealPlanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealPlanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealPlanInput, UserUncheckedUpdateWithoutMealPlanInput>
  }

  export type UserUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ingredient?: IngredientUpdateManyWithoutUserNestedInput
    Favorite?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ingredient?: IngredientUncheckedUpdateManyWithoutUserNestedInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutPlanInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutPlanInput, FavoriteUncheckedUpdateWithoutPlanInput>
    create: XOR<FavoriteCreateWithoutPlanInput, FavoriteUncheckedCreateWithoutPlanInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutPlanInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutPlanInput, FavoriteUncheckedUpdateWithoutPlanInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutPlanInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutPlanInput>
  }

  export type UserCreateWithoutFavoriteInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Ingredient?: IngredientCreateNestedManyWithoutUserInput
    MealPlan?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteInput = {
    id?: string
    username: string
    email: string
    password: string
    weight: number
    fitnessGoal: $Enums.FitnessGoal
    gender: $Enums.Gender
    fitnessLevel: $Enums.FitnessLevel
    favoriteCuisines?: UserCreatefavoriteCuisinesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Ingredient?: IngredientUncheckedCreateNestedManyWithoutUserInput
    MealPlan?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
  }

  export type MealPlanCreateWithoutFavoriteInput = {
    id?: string
    name: string
    status?: $Enums.PlanStatus
    planJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateWithoutFavoriteInput = {
    id?: string
    userId: string
    name: string
    status?: $Enums.PlanStatus
    planJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealPlanCreateOrConnectWithoutFavoriteInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutFavoriteInput, MealPlanUncheckedCreateWithoutFavoriteInput>
  }

  export type UserUpsertWithoutFavoriteInput = {
    update: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type UserUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ingredient?: IngredientUpdateManyWithoutUserNestedInput
    MealPlan?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    fitnessGoal?: EnumFitnessGoalFieldUpdateOperationsInput | $Enums.FitnessGoal
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    favoriteCuisines?: UserUpdatefavoriteCuisinesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ingredient?: IngredientUncheckedUpdateManyWithoutUserNestedInput
    MealPlan?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealPlanUpsertWithoutFavoriteInput = {
    update: XOR<MealPlanUpdateWithoutFavoriteInput, MealPlanUncheckedUpdateWithoutFavoriteInput>
    create: XOR<MealPlanCreateWithoutFavoriteInput, MealPlanUncheckedCreateWithoutFavoriteInput>
    where?: MealPlanWhereInput
  }

  export type MealPlanUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: MealPlanWhereInput
    data: XOR<MealPlanUpdateWithoutFavoriteInput, MealPlanUncheckedUpdateWithoutFavoriteInput>
  }

  export type MealPlanUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateManyUserInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealPlanCreateManyUserInput = {
    id?: string
    name: string
    status?: $Enums.PlanStatus
    planJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    planId: string
    createdAt?: Date | string
  }

  export type IngredientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUpdateManyWithoutPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type MealPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: MealPlanUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyPlanInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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