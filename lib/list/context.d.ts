import * as React from "react";
import { Direction, NodeMeta } from "../shared";
import { DestinationMeta, DragEndMeta, PlaceholderRendererInjectedProps, StackedGroupRendererInjectedProps, StackGroupMeta } from "./meta";
export declare const Context: React.Context<{
    itemSpacing: number;
    stackableAreaThreshold: number;
    draggingNodeMeta: NodeMeta<any> | undefined;
    setDraggingNodeMeta: (meta: NodeMeta<any> | undefined) => void;
    dropLineElementRef: React.RefObject<HTMLDivElement>;
    ghostWrapperElementRef: React.RefObject<HTMLDivElement>;
    isVisibleDropLineElement: boolean;
    setIsVisibleDropLineElement: (isVisible: boolean) => void;
    renderPlaceholder: ((injectedProps: PlaceholderRendererInjectedProps, meta: Pick<NodeMeta<any>, "identifier" | "groupIdentifier" | "index" | "isGroup">) => JSX.Element) | undefined;
    stackedGroupIdentifier: any;
    setStackedGroupIdentifier: (identifier: any) => void;
    renderStackedGroup: ((injectedProps: StackedGroupRendererInjectedProps, meta: Pick<NodeMeta<any>, "identifier" | "groupIdentifier" | "index">) => JSX.Element) | undefined;
    hoveredNodeMetaRef: React.MutableRefObject<NodeMeta<any> | undefined>;
    destinationMetaRef: React.MutableRefObject<DestinationMeta<any> | undefined>;
    direction: Direction;
    draggingCursorStyle: string | undefined;
    isDisabled: boolean;
    onDragStart: ((meta: Pick<NodeMeta<any>, "identifier" | "groupIdentifier" | "index" | "isGroup">) => void) | undefined;
    onDragEnd: (meta: DragEndMeta<any>) => void;
    onStackGroup: ((meta: StackGroupMeta<any>) => void) | undefined;
}>;