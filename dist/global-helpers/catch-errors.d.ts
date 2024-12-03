declare function catchErrors<T>(operation: () => Promise<T>): Promise<[T | null, Error | null]>;
