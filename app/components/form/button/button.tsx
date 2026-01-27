import { ReactNode, CSSProperties } from 'react';

import S from './button.module.scss'

export type ButtonProps = {
    size?: 'sm' | 'md' | 'lg';
    label: string;
    width?: string | { base?: string; sm?: string; md?: string; lg?: string; xs?: string };
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: ReactNode;
    id?: string;
    className?: string;
};

const Button = ({ label, width, onClick, icon, size = 'lg', id, className }: ButtonProps) => {
    const sizeClasses = {
        sm: S['btn--sm'],
        md: S['btn--md'],
        lg: S['btn--lg'],
    };

    const getResponsiveWidthVars = (width: string | { base?: string; sm?: string; md?: string; lg?: string; xs?: string } | undefined): CSSProperties => {
        if (!width) return {};
        if (typeof width === 'string') return { ['--btn-width' as keyof typeof width]: width };
        return {
            ['--btn-width' as keyof typeof width]: width.base || width.lg || 'auto',
            ['--btn-width-xs' as keyof typeof width]: width.xs,
            ['--btn-width-sm' as keyof typeof width]: width.sm,
            ['--btn-width-md' as keyof typeof width]: width.md,
            ['--btn-width-lg' as keyof typeof width]: width.lg,
        };
    };

    const combinedClass = `${S.btn} ${S.btn1} ${sizeClasses[size]} ${className || ''}`;

    return (
        <button id={id} className={combinedClass} style={getResponsiveWidthVars(width)} onClick={onClick}>
            {icon && <span className={S.icon}>{icon}</span>}
            {label}
        </button>
    );
};

export default Button;
