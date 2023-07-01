import * as React from 'react'
import Giscus from '@giscus/react';


export interface GiscusCommentsProps {
    theme: string;
  }

export const GiscusCmmentsImpl: React.FC<GiscusCommentsProps> = ({theme}) => {
    return <Giscus
        id="comments"
        repo="giscus/giscus-component"
        repoId="R_kgDOJ0Ag1g="
        category="General"
        categoryId="DIC_kwDOJ0Ag1s4CXmdj"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        host="https://giscus.app"
        loading="lazy" />;
}

export const GiscusCmments = React.memo(GiscusCmmentsImpl)
