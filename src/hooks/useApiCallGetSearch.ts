import {useCallback, useEffect, useState} from 'react';
import {IUseApiCallGetSearch} from '../definitions';

const useApiCallGetSearch = ({
                                 getAllValues,
                                 pageSize = 12,
                                 store,
                                 fetchingDispatch,
                                 loadedDispatch,
                                 failureDispatch,
                                 completedDispatch,
                                 location
                             }: IUseApiCallGetSearch) => {
    const [itemsPerPage, setItemsPerPage] = useState<number>(pageSize);
    const [actualPage, setActualPage] = useState<number>(1);
    const [wasSessionStorageRead, setWasSessionStorageRead] = useState<boolean>(false)

    const getData = useCallback(
        async (dispatch: any) => {
            dispatch(fetchingDispatch());


            let content;
            try {
                content = getAllValues && (await getAllValues(itemsPerPage, actualPage));

                if (content?.status === 200) {
                    dispatch(loadedDispatch(content?.data?.data));
                    if (content?.data?.data?.totalCount && itemsPerPage) {
                        if (content?.data?.data?.totalCount / itemsPerPage < actualPage) {
                            setActualPage(1);
                        }
                    }
                }
            } catch {
                dispatch(failureDispatch());
            }

            dispatch(completedDispatch());
        },
        [getAllValues, itemsPerPage, actualPage, loadedDispatch, failureDispatch, completedDispatch, fetchingDispatch],
    );

    const pageChanged = useCallback((page: number, e?: number) => {
        setActualPage(page);
    }, []);

    const sizeChanged = async (current: number, size: number) => {
        setItemsPerPage(size);
        setActualPage(1);
    };

    useEffect(() => {
        if (location) {
            let itemsPerPageFromStorage = sessionStorage.getItem('itemsPerPage');
            let actualPageFromStorage = sessionStorage.getItem('actualPage');

            if (itemsPerPageFromStorage) {
                setItemsPerPage(+itemsPerPageFromStorage)
            }

            if (actualPageFromStorage) {
                setActualPage(+actualPageFromStorage)
            }
        }
        setWasSessionStorageRead(true);
    }, [location]);

    useEffect(() => {
        if (location) {
            sessionStorage.setItem('itemsPerPage', itemsPerPage.toString());
            sessionStorage.setItem('actualPage', actualPage.toString());
        }
        if (wasSessionStorageRead) {
            store.dispatch(getData);
        }
    }, [itemsPerPage, actualPage, location, getData, wasSessionStorageRead]);

    return {
        actualPage,
        setActualPage,
        sizeChanged,
        pageChanged,
        itemsPerPage,
        setItemsPerPage,
        getData,
    };
};

export {useApiCallGetSearch};

