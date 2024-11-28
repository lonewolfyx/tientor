export interface BasicComponentInterface {
    name: string;
    icon: string;
    tag: string;
    enabled: {
        element: boolean;
        antv: boolean;
        arco: boolean;
    };
    _itemProps: {};
    _widgetProp: {};
}