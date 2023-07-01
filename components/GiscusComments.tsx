// import * as React from 'react'
// import Giscus from '@giscus/react';


export interface GiscusCommentsProps {
    theme: string;
  }

// export const GiscusCmmentsImpl: React.FC<GiscusCommentsProps> = ({theme}) => {
//     return <Giscus
//         id="comments"
//         repo="giscus/giscus-component"
//         repoId="R_kgDOJ0Ag1g="
//         category="General"
//         categoryId="DIC_kwDOJ0Ag1s4CXmdj"
//         mapping="title"
//         reactionsEnabled="1"
//         emitMetadata="0"
//         inputPosition="top"
//         theme={theme}
//         lang="en"
//         // host="https://giscus.app"
//         loading="lazy" />;
// }

// export const GiscusCmments = React.memo(GiscusCmmentsImpl)

import { Helmet } from "react-helmet"
import * as React from 'react'


export const GiscusCommentsImpl: React.FC<GiscusCommentsProps> = ({theme}) => {
  return (
    <div className="giscus">
      <p>HEYY</p>
      <Helmet>
        <script src="https://giscus.app/client.js"
          data-repo="otman404/personal-blog"
          data-repo-id="R_kgDOJ0Ag1g"
          data-category="General"
          data-category-id="DIC_kwDOJ0Ag1s4CXmdj"
          data-mapping="title"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme={theme}
          data-lang="en"
          data-loading="lazy"
          crossOrigin="anonymous"
          async>
        </script>
      </Helmet>
    </div>
  )
}

export const GiscusComments = React.memo(GiscusCommentsImpl)
