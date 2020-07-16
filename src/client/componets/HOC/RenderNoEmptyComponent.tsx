/* eslint-disable @typescript-eslint/ban-types */
// 拒绝渲染属性为空的数组
import React, {FC} from 'react';

interface Iprops {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

function RenderNoEmptyComponent(
  WrapperedComponent: Function,
  checkProps: string[]
): FC {
  const newComponent: FC = (props: Iprops) => {
    const hasEmpty = checkProps.some((propName) => {
      if (Array.isArray(props[propName])) {
        return props[propName].length === 0;
      }
      return !!props[propName];
    });
    return hasEmpty ? <span /> : <WrapperedComponent {...props} />;
  };
  return newComponent;
}

export default RenderNoEmptyComponent;
