import React, {FC} from 'react';

interface Iprops {
  name: string;
  city?: string;
}

const LinkToMap: FC<Iprops> = ({
  name,
  city = '510100', // 成都
}) => {
  return (
    <a
      href={`https://www.amap.com/search?query=${name}&city=${city}`}
      target="_blank"
      rel="nofollow me noopener noreferrer"
    >
      { name }
    </a>
  )
}

export default LinkToMap;
