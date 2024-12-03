import TientorConfigElementInput from "./element/InputWidget.vue";
import TientorConfigElementCascader from "./element/CascaderWidget.vue";
import TientorConfigElementCheckbox from "./element/CheckboxWidget.vue";
import TientorConfigElementColor from "./element/ColorWidget.vue";
import TientorConfigElementDateTime from "./element/DateTimeWidget.vue";
import TientorConfigElementDate from "./element/DateWidget.vue";
import TientorConfigElementNumber from "./element/NumberWidget.vue";
import TientorConfigElementPassword from "./element/PasswordWidget.vue";
import TientorConfigElementRadio from "./element/RadioWidget.vue";
import TientorConfigElementRate from "./element/RateWidget.vue";
import TientorConfigElementSelect from "./element/SelectWidget.vue";
import TientorConfigElementSlider from "./element/SliderWidget.vue";
import TientorConfigElementSwitch from "./element/SwitchWidget.vue";
import TientorConfigElementTextarea from "./element/TextareaWidget.vue";
import TientorConfigElementTimePicker from "./element/TimePickerWidget.vue";
import TientorConfigElementTimeSelect from "./element/TimeSelectWidget.vue";
import TientorConfigElementTransfer from "./element/TransferWidget.vue";
import TientorConfigElementTreeSelect from "./element/TreeSelectWidget.vue";
import TientorConfigElementTree from "./element/TreeWidget.vue";
import TientorConfigElementUpload from "./element/UploadWidget.vue";
import TientorConfigArcoCascader from "./arco/CascaderWidget.vue";
import TientorConfigArcoCheckbox from "./arco/CheckboxWidget.vue";
import TientorConfigArcoColor from "./arco/ColorWidget.vue";
import TientorConfigArcoDate from "./arco/DateWidget.vue";
import TientorConfigArcoInput from "./arco/InputWidget.vue";
import TientorConfigArcoNumber from "./arco/NumberWidget.vue";
import TientorConfigArcoPassword from "./arco/PasswordWidget.vue";
import TientorConfigArcoRadio from "./arco/RadioWidget.vue";
import TientorConfigArcoRate from "./arco/RateWidget.vue";
import TientorConfigArcoSelect from "./arco/SelectWidget.vue";
import TientorConfigArcoSlider from "./arco/SliderWidget.vue";
import TientorConfigArcoSwitch from "./arco/SwitchWidget.vue";
import TientorConfigArcoTextarea from "./arco/TextareaWidget.vue";
import TientorConfigArcoTimePicker from "./arco/TimePickerWidget.vue";
import TientorConfigArcoTimeSelect from "./arco/TimeSelectWidget.vue";
import TientorConfigArcoTransfer from "./arco/TransferWidget.vue";
import TientorConfigArcoTreeSelect from "./arco/TreeSelectWidget.vue";
import TientorConfigArcoTree from "./arco/TreeWidget.vue";
import TientorConfigArcoUpload from "./arco/UploadWidget.vue";
import TientorConfigAntvCascader from "./antv/CascaderWidget.vue";
import TientorConfigAntvCheckbox from "./antv/CheckboxWidget.vue";
import TientorConfigAntvColor from "./antv/ColorWidget.vue";
import TientorConfigAntvDateTime from "./antv/DateTimeWidget.vue";
import TientorConfigAntvDate from "./antv/DateWidget.vue";
import TientorConfigAntvInput from "./antv/InputWidget.vue";
import TientorConfigAntvNumber from "./antv/NumberWidget.vue";
import TientorConfigAntvPassword from "./antv/PasswordWidget.vue";
import TientorConfigAntvRadio from "./antv/RadioWidget.vue";
import TientorConfigAntvRate from "./antv/RateWidget.vue";
import TientorConfigAntvSelect from "./antv/SelectWidget.vue";
import TientorConfigAntvSlider from "./antv/SliderWidget.vue";
import TientorConfigAntvSwitch from "./antv/SwitchWidget.vue";
import TientorConfigAntvTextarea from "./antv/TextareaWidget.vue";
import TientorConfigAntvTimePicker from "./antv/TimePickerWidget.vue";
import TientorConfigAntvTimeSelect from "./antv/TimeSelectWidget.vue";
import TientorConfigAntvTransfer from "./antv/TransferWidget.vue";
import TientorConfigAntvTreeSelect from "./antv/TreeSelectWidget.vue";
import TientorConfigAntvTree from "./antv/TreeWidget.vue";
import TientorConfigAntvUpload from "./antv/UploadWidget.vue";
import {widthInstall} from "./_utils/index.js";
import TientorConfigArcoFormProp from "./arco/FormProp.vue";

const component = {
    // Arco
    TientorConfigArcoFormProp,
    TientorConfigArcoCascader,
    TientorConfigArcoCheckbox,
    TientorConfigArcoColor,
    TientorConfigArcoDate,
    TientorConfigArcoInput,
    TientorConfigArcoNumber,
    TientorConfigArcoPassword,
    TientorConfigArcoRadio,
    TientorConfigArcoRate,
    TientorConfigArcoSelect,
    TientorConfigArcoSlider,
    TientorConfigArcoSwitch,
    TientorConfigArcoTextarea,
    TientorConfigArcoTimePicker,
    TientorConfigArcoTimeSelect,
    TientorConfigArcoTransfer,
    TientorConfigArcoTreeSelect,
    TientorConfigArcoTree,
    TientorConfigArcoUpload,

    // AntV
    TientorConfigAntvCascader,
    TientorConfigAntvCheckbox,
    TientorConfigAntvColor,
    TientorConfigAntvDateTime,
    TientorConfigAntvDate,
    TientorConfigAntvInput,
    TientorConfigAntvNumber,
    TientorConfigAntvPassword,
    TientorConfigAntvRadio,
    TientorConfigAntvRate,
    TientorConfigAntvSelect,
    TientorConfigAntvSlider,
    TientorConfigAntvSwitch,
    TientorConfigAntvTextarea,
    TientorConfigAntvTimePicker,
    TientorConfigAntvTimeSelect,
    TientorConfigAntvTransfer,
    TientorConfigAntvTreeSelect,
    TientorConfigAntvTree,
    TientorConfigAntvUpload,

    // 饿了么
    TientorConfigElementCascader,
    TientorConfigElementCheckbox,
    TientorConfigElementColor,
    TientorConfigElementDateTime,
    TientorConfigElementDate,
    TientorConfigElementInput,
    TientorConfigElementNumber,
    TientorConfigElementPassword,
    TientorConfigElementRadio,
    TientorConfigElementRate,
    TientorConfigElementSelect,
    TientorConfigElementSlider,
    TientorConfigElementSwitch,
    TientorConfigElementTextarea,
    TientorConfigElementTimePicker,
    TientorConfigElementTimeSelect,
    TientorConfigElementTransfer,
    TientorConfigElementTreeSelect,
    TientorConfigElementTree,
    TientorConfigElementUpload
};

const install = (app, options) => {
    // for (const key of Object.keys(component)) {
    //     app.component(component[key].name, component[key]);
    // }
    widthInstall(app, component)
}
const TientorConfiguration = {
    ...component,
    install
};

export default TientorConfiguration;