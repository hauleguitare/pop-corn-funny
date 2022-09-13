import * as React from 'react';
import { SwiperSlide } from 'swiper/react';

interface IProps<T, As extends React.ElementType> {
    items: T[];
    className?: string;
    renderItem: (item: T) => React.ReactNode;
    as?: As;
}

function ListItem<T, As extends React.ElementType>(
    props: IProps<T, As> & Omit<React.ComponentPropsWithoutRef<As>, keyof IProps<T, As>>
) {
    const { items, className, renderItem, as, noParent = false, ...rest } = props;
    const Component = as ?? 'ul';
    return <Component className={className}>{items?.map(renderItem)}</Component>;
}

export default ListItem;
