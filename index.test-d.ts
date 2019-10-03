import {expectType, expectError} from 'tsd';
import {IsSpecificNumber, IsTuple, First, Rest, Prepend, Take, Inc, Dec, Drop, Slice, Concat, Remove, LessThan, LessThanOrEqual} from './'

expectType<IsSpecificNumber<1>>(true);
expectType<IsSpecificNumber<number>>(false);

expectType<IsTuple<[1]>>(true);
expectType<IsTuple<number[]>>(false);

type MyTuple = [number, 2, string, 'foo', {bar: 'bar'}];

expectType<First<MyTuple>>({} as number);
expectType<Rest<MyTuple>>([2, '', 'foo', {bar: 'bar'}]);
expectType<First<Rest<MyTuple>>>(2);

expectType<Prepend<boolean, [number, string]>>([false, 0, '']);
expectType<Prepend<boolean, []>>([false]);

expectType<Inc<5>>(6);
expectType<Dec<5>>(4);
expectType<Inc<100>>({} as number);
expectType<Dec<100>>({} as number);

expectType<LessThan<6>>(5);
expectError<LessThan<6>>(8);
expectError<LessThan<6>>(6);
expectError<LessThan<6>>({} as number);
expectType<LessThanOrEqual<6>>(5);
expectError<LessThanOrEqual<6>>(8);
expectType<LessThanOrEqual<6>>(6);

expectType<LessThan<15>>(1);
expectType<LessThan<15>>({} as number);

expectType<Take<MyTuple, 3>>([0, 2, '']);
expectType<Take<MyTuple, 20>>([]);
expectType<Take<[number, boolean], 3>>([0, true]);
expectType<Take<Array<number | boolean>, 3>>([0, true, false]);

expectType<Drop<MyTuple, 3>>(['foo', {bar: 'bar'}]);
expectType<Drop<MyTuple, 30>>(['foo', {bar: 'bar'}, 2]);

expectType<Slice<MyTuple, 0, 10>>([0, 2, '', 'foo', {bar: 'bar'}]);
expectType<Slice<MyTuple, 0, 1>>([0]);
expectType<Slice<MyTuple, 0, 0>>([]);
expectType<Slice<MyTuple, 1, 2>>([2, '']);
expectType<Slice<MyTuple, 2, 2>>(['', 'foo']);
expectType<Slice<MyTuple, 2, 10>>(['', 'foo', {bar: 'bar'}]);
expectType<Slice<MyTuple, 8, 10>>([]);
expectType<Slice<MyTuple, 8, 1>>([]);
expectType<Slice<MyTuple, 8, 0>>([]);

expectType<Concat<[0, 1, 2], [3, 4, 5]>>([0, 1, 2, 3, 4, 5]);
expectType<Concat<MyTuple, [3, 4, 5]>>([0, 2, '', 'foo', {bar: 'bar'}, 3, 4, 5]);
expectType<Concat<[3, 4, 5], MyTuple>>([3, 4, 5, 0, 2, '', 'foo', {bar: 'bar'}]);
expectType<Concat<number[], [boolean, boolean]>>([0, false, true, 1]);
expectType<Concat<[1, 2, 3], boolean[]>>([1, 2, 3, false, true]);

expectType<Remove<[0, 1, 2, 3, 4], 2>>([0, 1, 3, 4]);
expectType<Remove<[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11>>([]);
