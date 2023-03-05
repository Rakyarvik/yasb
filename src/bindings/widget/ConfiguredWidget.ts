// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ActiveWindowWidgetProps } from "./active_window\\ActiveWindowWidgetProps";
import type { CustomWidgetProps } from "./custom\\CustomWidgetProps";
import type { DateTimeWidgetProps } from "./datetime\\DateTimeWidgetProps";
import type { SysInfoWidgetProps } from "./sysinfo\\SysInfoWidgetProps";
import type { TextWidgetProps } from "./text\\TextWidgetProps";
import type { UnknownWidgetProps } from "./unknown\\UnknownWidgetProps";

export type ConfiguredWidget =
  | { kind: "ActiveWindowWidget" } & ActiveWindowWidgetProps
  | { kind: "CustomWidget" } & CustomWidgetProps
  | { kind: "DateTimeWidget" } & DateTimeWidgetProps
  | { kind: "TextWidget" } & TextWidgetProps
  | { kind: "SysInfoWidget" } & SysInfoWidgetProps
  | { kind: "UnknownWidget" } & UnknownWidgetProps;
