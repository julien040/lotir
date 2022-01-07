export default buttonProps;
declare namespace buttonProps {
    namespace baseStyle {
        const backgroundColor: string;
        const borderRadius: number;
        const boxSizing: string;
        namespace _hover {
            const bg: string;
        }
    }
    namespace sizes {
        namespace sm {
            const pt: string;
            const pb: string;
            const pl: string;
            const pr: string;
            const fontSize: string;
        }
        namespace md {
            const pt_1: string;
            export { pt_1 as pt };
            const pb_1: string;
            export { pb_1 as pb };
            const pl_1: string;
            export { pl_1 as pl };
            const pr_1: string;
            export { pr_1 as pr };
            const fontSize_1: string;
            export { fontSize_1 as fontSize };
        }
        namespace lg {
            const pt_2: string;
            export { pt_2 as pt };
            const pb_2: string;
            export { pb_2 as pb };
            const pl_2: string;
            export { pl_2 as pl };
            const pr_2: string;
            export { pr_2 as pr };
            const fontSize_2: string;
            export { fontSize_2 as fontSize };
        }
    }
    namespace variants {
        namespace secondary {
            const backgroundColor_1: string;
            export { backgroundColor_1 as backgroundColor };
            export namespace _hover_1 {
                const bg_1: string;
                export { bg_1 as bg };
            }
            export { _hover_1 as _hover };
            export const borderColor: string;
            export const borderWidth: number;
            export const textColor: string;
        }
        namespace white {
            const backgroundColor_2: string;
            export { backgroundColor_2 as backgroundColor };
            export const boxShadow: string;
            export namespace _hover_2 {
                const bg_2: string;
                export { bg_2 as bg };
            }
            export { _hover_2 as _hover };
        }
        namespace danger {
            const backgroundColor_3: string;
            export { backgroundColor_3 as backgroundColor };
            export namespace _hover_3 {
                const bg_3: string;
                export { bg_3 as bg };
            }
            export { _hover_3 as _hover };
        }
        namespace warn {
            const backgroundColor_4: string;
            export { backgroundColor_4 as backgroundColor };
            export namespace _hover_4 {
                const bg_4: string;
                export { bg_4 as bg };
            }
            export { _hover_4 as _hover };
        }
        namespace confirm {
            const backgroundColor_5: string;
            export { backgroundColor_5 as backgroundColor };
            export namespace _hover_5 {
                const bg_5: string;
                export { bg_5 as bg };
            }
            export { _hover_5 as _hover };
        }
    }
    namespace defaultProps {
        const size: string;
        const variant: string;
    }
}
//# sourceMappingURL=button.d.ts.map