import { CardFrame } from './TimeTableStyle';
import { Card, List } from 'antd';
import 'antd/dist/antd.css';
const data = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0
];

export const TimeTableContent = () => {
    return (
        <List
            grid={{
                gutter: 4,
                xs: 48,
                sm: 48,
                md: 48,
                lg: 48,
                xl: 48,
                xxl: 48
            }}
            dataSource={data}
            renderItem={(item, i) => (
                <List.Item>
                    <CardFrame>
                        <Card
                            style={{
                                height: `${i === 0 || i === 47 ? 50 : i % 2 === 0 ? 35 : 25}px`
                            }}
                        />
                    </CardFrame>
                </List.Item>
            )}
        />
    );
};
