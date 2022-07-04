import { Card, List } from 'antd';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

export const TimeTableContent = () => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 24
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Card title={item.title}></Card>
                </List.Item>
            )}
        />
    );
};
