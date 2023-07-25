const runAsyncFuncsInSeries = (...fns) => fns
	.reduce((fn, next) => fn.then(next), Promise.resolve())

const runPromisesInParallel = (...promises) => Promise.all(promises)

const runSyncFunctionsInParallel = (...fns) => Promise.all(fns.map(fn => fn()))
