import { loader } from 'webpack';
export declare type ClientPagesLoaderOptions = {
    absolutePagePath: string;
    page: string;
    hotRouterUpdates: boolean;
};
declare const nextClientPagesLoader: loader.Loader;
export default nextClientPagesLoader;
