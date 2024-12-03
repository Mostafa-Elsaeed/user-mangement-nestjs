async function catchErrors(operation) {
    try {
        const result = await operation();
        return [result, null];
    }
    catch (error) {
        return [null, error instanceof Error ? error : new Error(String(error))];
    }
}
//# sourceMappingURL=catch-errors.js.map