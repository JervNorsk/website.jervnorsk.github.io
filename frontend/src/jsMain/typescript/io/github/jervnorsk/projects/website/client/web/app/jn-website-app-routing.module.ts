import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JnWebsitePage} from "./pages/jn-website-page.component";
import {JnCoreModule} from "../../../../../foundation/client/web/features/core/jn-core.module";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: JnWebsitePage
    },
    {
        path: '',
        children: [
            {
                path: 'components',
                loadChildren: () => JnCoreModule,
            },
            {
                path: 'webgl/three',
                loadChildren: () => import("../features/webgl/engines/three/jn-website-th.module").then(it => it.JnWebsiteThModule)
            },
            {
                path: 'projects',
                children: [
                    {
                        path: 'streaming',
                        loadChildren: () => import("../../../../streaming/client/web/app/jn-streaming-app.module").then(it => it.JnStreamingAppModule)
                    },
                ]
            },
        ]
    },
    {
        path: '**',
        component: JnWebsitePage
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: false})],
    exports: [RouterModule]
})
export class JnWebsiteAppRoutingModule {
}
