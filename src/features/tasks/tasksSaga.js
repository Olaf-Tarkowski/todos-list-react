import { takeEvery, call, put, delay, select} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setTasksInLocalStorage } from "./tasksInLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHendler() {
    try{
        yield delay(1_000);
        const exampleTasls = yield call(getExampleTasks);
        yield put(setTasks(exampleTasls));
    }catch(error){
        yield call(alert, "Coś nie poszło zgodnie z oczekiwaniami");
    }
}

function* saveTasksInLocalStorageHendler() {
        const tasks = yield select(selectTasks)
        yield call(setTasksInLocalStorage, tasks)
};

export function* tasksSaga() {
        yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler);
        yield takeEvery("*", saveTasksInLocalStorageHendler);
    }