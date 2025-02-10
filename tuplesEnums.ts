const color: [number, number, number] = [255, 0, 255];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

isDelivered(3);

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
}

ArrowKeys.LEFT;