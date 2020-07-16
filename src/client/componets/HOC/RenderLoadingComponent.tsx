/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, {useContext, FC} from 'react';
import Loading from '../Loading';
import { AppContext } from '../../context/appContext';

export const RenderLoadingComponent = (
  WrapperedComponent: FC<any>,
  LoadingHeight = '300px'
) => {
  function Temp(props: any) {
    const { isLoading } = useContext(AppContext);
    return isLoading ? (
      <Loading height={LoadingHeight} tip="加载中..." />
    ) : (
      <WrapperedComponent {...props} />
    );
  }
  return Temp;
};

export function RenderLoadingJSX(
  WrapperedComponent: JSX.Element,
  isLoading: boolean
): JSX.Element {
  return isLoading ? <Loading tip="加载中..." /> : WrapperedComponent;
}
