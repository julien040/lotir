export namespace inputProps {
    namespace baseStyle {
        namespace field {
            const backgroundColor: string;
            const paddingInlineStart: string;
            namespace _focus {
                const backgroundColor_1: string;
                export { backgroundColor_1 as backgroundColor };
            }
            namespace _placeholder {
                const color: string;
                const fontSize: number;
            }
            namespace _invalid {
                const borderColor: string;
                const borderWidth: number;
                const textColor: string;
            }
            namespace _disabled {
                export const cursor: string;
                const backgroundColor_2: string;
                export { backgroundColor_2 as backgroundColor };
            }
        }
    }
    namespace sizes {
        namespace sm {
            export namespace field_1 {
                export const borderRadius: number;
                export const pt: string;
                export const pb: string;
                export const pl: string;
                export const pr: string;
                const fontSize_1: number;
                export { fontSize_1 as fontSize };
            }
            export { field_1 as field };
            export namespace md {
                export namespace field_2 {
                    const borderRadius_1: string;
                    export { borderRadius_1 as borderRadius };
                    const pt_1: string;
                    export { pt_1 as pt };
                    const pb_1: string;
                    export { pb_1 as pb };
                    const pl_1: string;
                    export { pl_1 as pl };
                    const pr_1: string;
                    export { pr_1 as pr };
                    const fontSize_2: number;
                    export { fontSize_2 as fontSize };
                }
                export { field_2 as field };
            }
            export namespace lg {
                export namespace field_3 {
                    const borderRadius_2: number;
                    export { borderRadius_2 as borderRadius };
                    const pt_2: string;
                    export { pt_2 as pt };
                    const pb_2: string;
                    export { pb_2 as pb };
                    const pl_2: string;
                    export { pl_2 as pl };
                    const pr_2: string;
                    export { pr_2 as pr };
                }
                export { field_3 as field };
            }
        }
    }
    namespace variants {
        namespace primary {
            export namespace field_4 {
                const borderRadius_3: number;
                export { borderRadius_3 as borderRadius };
            }
            export { field_4 as field };
        }
        namespace white {
            export namespace field_5 {
                const borderRadius_4: number;
                export { borderRadius_4 as borderRadius };
                const backgroundColor_3: string;
                export { backgroundColor_3 as backgroundColor };
                export namespace _focus_1 {
                    const backgroundColor_4: string;
                    export { backgroundColor_4 as backgroundColor };
                }
                export { _focus_1 as _focus };
            }
            export { field_5 as field };
        }
    }
    namespace defaultProps {
        const size: string;
        const variant: string;
    }
}
export namespace labelProps {
    export namespace baseStyle_1 {
        const textColor_1: string;
        export { textColor_1 as textColor };
        export const fontWeight: number;
    }
    export { baseStyle_1 as baseStyle };
    export namespace sizes_1 {
        export namespace sm_1 {
            const fontSize_3: number;
            export { fontSize_3 as fontSize };
        }
        export { sm_1 as sm };
        export namespace md_1 {
            const fontSize_4: number;
            export { fontSize_4 as fontSize };
        }
        export { md_1 as md };
        export namespace lg_1 {
            const fontSize_5: number;
            export { fontSize_5 as fontSize };
        }
        export { lg_1 as lg };
    }
    export { sizes_1 as sizes };
    const variants_1: {};
    export { variants_1 as variants };
    export namespace defaultProps_1 {
        const size_1: string;
        export { size_1 as size };
        const variant_1: string;
        export { variant_1 as variant };
    }
    export { defaultProps_1 as defaultProps };
}
export namespace errorProps {
    const baseStyle_2: {};
    export { baseStyle_2 as baseStyle };
    const sizes_2: {};
    export { sizes_2 as sizes };
    const variants_2: {};
    export { variants_2 as variants };
    export namespace defaultProps_2 {
        const size_2: string;
        export { size_2 as size };
        const variant_2: string;
        export { variant_2 as variant };
    }
    export { defaultProps_2 as defaultProps };
}
export namespace radioProps {
    export namespace baseStyle_3 {
        const container: {};
        namespace control {
            export const bg: string;
            const borderColor_1: string;
            export { borderColor_1 as borderColor };
            export namespace _disabled_1 {
                const cursor_1: string;
                export { cursor_1 as cursor };
            }
            export { _disabled_1 as _disabled };
            const cursor_2: string;
            export { cursor_2 as cursor };
        }
        namespace label {
            export namespace _invalid_1 {
                const textColor_2: string;
                export { textColor_2 as textColor };
            }
            export { _invalid_1 as _invalid };
            const textColor_3: string;
            export { textColor_3 as textColor };
            const fontWeight_1: number;
            export { fontWeight_1 as fontWeight };
            const fontSize_6: number;
            export { fontSize_6 as fontSize };
        }
    }
    export { baseStyle_3 as baseStyle };
    export namespace sizes_3 {
        export namespace sm_2 {
            export namespace control_1 {
                const width: number;
                const height: number;
            }
            export { control_1 as control };
        }
        export { sm_2 as sm };
    }
    export { sizes_3 as sizes };
    const variants_3: {};
    export { variants_3 as variants };
    export namespace defaultProps_3 {
        const size_3: string;
        export { size_3 as size };
        const variant_3: string;
        export { variant_3 as variant };
        export const colorScheme: string;
    }
    export { defaultProps_3 as defaultProps };
}
export namespace checkBoxProps {
    export namespace baseStyle_4 {
        const container_1: {};
        export { container_1 as container };
        export namespace control_2 {
            const borderRadius_5: number;
            export { borderRadius_5 as borderRadius };
            const bg_1: string;
            export { bg_1 as bg };
            const borderColor_2: string;
            export { borderColor_2 as borderColor };
        }
        export { control_2 as control };
        export namespace label_1 {
            export namespace _invalid_2 {
                const textColor_4: string;
                export { textColor_4 as textColor };
            }
            export { _invalid_2 as _invalid };
            const textColor_5: string;
            export { textColor_5 as textColor };
            const fontWeight_2: number;
            export { fontWeight_2 as fontWeight };
            const fontSize_7: number;
            export { fontSize_7 as fontSize };
        }
        export { label_1 as label };
    }
    export { baseStyle_4 as baseStyle };
    export namespace sizes_4 {
        export namespace sm_3 {
            export namespace control_3 {
                const width_1: number;
                export { width_1 as width };
                const height_1: number;
                export { height_1 as height };
            }
            export { control_3 as control };
        }
        export { sm_3 as sm };
    }
    export { sizes_4 as sizes };
    const variants_4: {};
    export { variants_4 as variants };
    export namespace defaultProps_4 {
        const size_4: string;
        export { size_4 as size };
        const variant_4: string;
        export { variant_4 as variant };
        const colorScheme_1: string;
        export { colorScheme_1 as colorScheme };
    }
    export { defaultProps_4 as defaultProps };
}
export namespace textAreaProps {
    export namespace baseStyle_5 {
        const backgroundColor_5: string;
        export { backgroundColor_5 as backgroundColor };
        const paddingInlineStart_1: string;
        export { paddingInlineStart_1 as paddingInlineStart };
        export const focusBorderColor: string;
        export namespace _focus_2 {
            const borderColor_3: string;
            export { borderColor_3 as borderColor };
            const borderWidth_1: number;
            export { borderWidth_1 as borderWidth };
        }
        export { _focus_2 as _focus };
        export namespace _placeholder_1 {
            const color_1: string;
            export { color_1 as color };
            const fontSize_8: number;
            export { fontSize_8 as fontSize };
        }
        export { _placeholder_1 as _placeholder };
        export namespace _invalid_3 {
            const borderColor_4: string;
            export { borderColor_4 as borderColor };
            const borderWidth_2: number;
            export { borderWidth_2 as borderWidth };
            const textColor_6: string;
            export { textColor_6 as textColor };
        }
        export { _invalid_3 as _invalid };
        export namespace _disabled_2 {
            export namespace _placeholder_2 {
                const color_2: string;
                export { color_2 as color };
                const fontSize_9: number;
                export { fontSize_9 as fontSize };
            }
            export { _placeholder_2 as _placeholder };
            const cursor_3: string;
            export { cursor_3 as cursor };
        }
        export { _disabled_2 as _disabled };
        const textColor_7: string;
        export { textColor_7 as textColor };
    }
    export { baseStyle_5 as baseStyle };
    export namespace sizes_5 {
        export namespace sm_4 {
            const borderRadius_6: number;
            export { borderRadius_6 as borderRadius };
        }
        export { sm_4 as sm };
    }
    export { sizes_5 as sizes };
    const variants_5: {};
    export { variants_5 as variants };
    export namespace defaultProps_5 {
        const size_5: string;
        export { size_5 as size };
        const variant_5: string;
        export { variant_5 as variant };
    }
    export { defaultProps_5 as defaultProps };
}
export namespace switchProps {
    export namespace baseStyle_6 {
        namespace track {
            const backgroundColor_6: string;
            export { backgroundColor_6 as backgroundColor };
            const colorScheme_2: string;
            export { colorScheme_2 as colorScheme };
        }
    }
    export { baseStyle_6 as baseStyle };
    const sizes_6: {};
    export { sizes_6 as sizes };
    const variants_6: {};
    export { variants_6 as variants };
    export namespace defaultProps_6 {
        const size_6: string;
        export { size_6 as size };
        const variant_6: string;
        export { variant_6 as variant };
        const colorScheme_3: string;
        export { colorScheme_3 as colorScheme };
    }
    export { defaultProps_6 as defaultProps };
}
//# sourceMappingURL=input.d.ts.map