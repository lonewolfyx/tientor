export interface WidgetInterface {
    id?: string,
    name: string;
    icon: string;
    tag: string;
    enabled: {
        element: boolean;
        antv: boolean;
        arco: boolean;
    };
    // 配置面板
    _config: {
        arco: string,
        element?: string,
        antv?: string
    },
    _itemProps: {};
    _widgetProp: {};
}