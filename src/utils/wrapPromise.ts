import { IReturnWrapPromise } from "@/@types/global/WrapPromiseType";



const WrapPromise = function<T>(promise: Promise<T>): IReturnWrapPromise<T>{
    let status = 'pending';
    let results: T;
    let suspender = promise.then((res) =>{
        status = 'success';
        results = res;
    },(err) =>{
        status = 'error';
        results = err;
    });
    return{
        read(){
            if (status === 'pending'){
                throw suspender;
            }else if (status === 'error'){
                throw results;
            }
            return results;
        }
    }
}


export default WrapPromise;