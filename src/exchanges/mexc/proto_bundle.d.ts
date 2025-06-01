import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a PrivateAccountV3Api. */
export interface IPrivateAccountV3Api {

    /** PrivateAccountV3Api vcoinName */
    vcoinName?: (string|null);

    /** PrivateAccountV3Api coinId */
    coinId?: (string|null);

    /** PrivateAccountV3Api balanceAmount */
    balanceAmount?: (string|null);

    /** PrivateAccountV3Api balanceAmountChange */
    balanceAmountChange?: (string|null);

    /** PrivateAccountV3Api frozenAmount */
    frozenAmount?: (string|null);

    /** PrivateAccountV3Api frozenAmountChange */
    frozenAmountChange?: (string|null);

    /** PrivateAccountV3Api type */
    type?: (string|null);

    /** PrivateAccountV3Api time */
    time?: (number|Long|null);
}

/** Represents a PrivateAccountV3Api. */
export class PrivateAccountV3Api implements IPrivateAccountV3Api {

    /**
     * Constructs a new PrivateAccountV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPrivateAccountV3Api);

    /** PrivateAccountV3Api vcoinName. */
    public vcoinName: string;

    /** PrivateAccountV3Api coinId. */
    public coinId: string;

    /** PrivateAccountV3Api balanceAmount. */
    public balanceAmount: string;

    /** PrivateAccountV3Api balanceAmountChange. */
    public balanceAmountChange: string;

    /** PrivateAccountV3Api frozenAmount. */
    public frozenAmount: string;

    /** PrivateAccountV3Api frozenAmountChange. */
    public frozenAmountChange: string;

    /** PrivateAccountV3Api type. */
    public type: string;

    /** PrivateAccountV3Api time. */
    public time: (number|Long);

    /**
     * Creates a new PrivateAccountV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PrivateAccountV3Api instance
     */
    public static create(properties?: IPrivateAccountV3Api): PrivateAccountV3Api;

    /**
     * Encodes the specified PrivateAccountV3Api message. Does not implicitly {@link PrivateAccountV3Api.verify|verify} messages.
     * @param message PrivateAccountV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPrivateAccountV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PrivateAccountV3Api message, length delimited. Does not implicitly {@link PrivateAccountV3Api.verify|verify} messages.
     * @param message PrivateAccountV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPrivateAccountV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PrivateAccountV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PrivateAccountV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PrivateAccountV3Api;

    /**
     * Decodes a PrivateAccountV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PrivateAccountV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PrivateAccountV3Api;

    /**
     * Verifies a PrivateAccountV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PrivateAccountV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PrivateAccountV3Api
     */
    public static fromObject(object: { [k: string]: any }): PrivateAccountV3Api;

    /**
     * Creates a plain object from a PrivateAccountV3Api message. Also converts values to other types if specified.
     * @param message PrivateAccountV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PrivateAccountV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PrivateAccountV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PrivateAccountV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PrivateDealsV3Api. */
export interface IPrivateDealsV3Api {

    /** PrivateDealsV3Api price */
    price?: (string|null);

    /** PrivateDealsV3Api quantity */
    quantity?: (string|null);

    /** PrivateDealsV3Api amount */
    amount?: (string|null);

    /** PrivateDealsV3Api tradeType */
    tradeType?: (number|null);

    /** PrivateDealsV3Api isMaker */
    isMaker?: (boolean|null);

    /** PrivateDealsV3Api isSelfTrade */
    isSelfTrade?: (boolean|null);

    /** PrivateDealsV3Api tradeId */
    tradeId?: (string|null);

    /** PrivateDealsV3Api clientOrderId */
    clientOrderId?: (string|null);

    /** PrivateDealsV3Api orderId */
    orderId?: (string|null);

    /** PrivateDealsV3Api feeAmount */
    feeAmount?: (string|null);

    /** PrivateDealsV3Api feeCurrency */
    feeCurrency?: (string|null);

    /** PrivateDealsV3Api time */
    time?: (number|Long|null);
}

/** Represents a PrivateDealsV3Api. */
export class PrivateDealsV3Api implements IPrivateDealsV3Api {

    /**
     * Constructs a new PrivateDealsV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPrivateDealsV3Api);

    /** PrivateDealsV3Api price. */
    public price: string;

    /** PrivateDealsV3Api quantity. */
    public quantity: string;

    /** PrivateDealsV3Api amount. */
    public amount: string;

    /** PrivateDealsV3Api tradeType. */
    public tradeType: number;

    /** PrivateDealsV3Api isMaker. */
    public isMaker: boolean;

    /** PrivateDealsV3Api isSelfTrade. */
    public isSelfTrade: boolean;

    /** PrivateDealsV3Api tradeId. */
    public tradeId: string;

    /** PrivateDealsV3Api clientOrderId. */
    public clientOrderId: string;

    /** PrivateDealsV3Api orderId. */
    public orderId: string;

    /** PrivateDealsV3Api feeAmount. */
    public feeAmount: string;

    /** PrivateDealsV3Api feeCurrency. */
    public feeCurrency: string;

    /** PrivateDealsV3Api time. */
    public time: (number|Long);

    /**
     * Creates a new PrivateDealsV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PrivateDealsV3Api instance
     */
    public static create(properties?: IPrivateDealsV3Api): PrivateDealsV3Api;

    /**
     * Encodes the specified PrivateDealsV3Api message. Does not implicitly {@link PrivateDealsV3Api.verify|verify} messages.
     * @param message PrivateDealsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPrivateDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PrivateDealsV3Api message, length delimited. Does not implicitly {@link PrivateDealsV3Api.verify|verify} messages.
     * @param message PrivateDealsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPrivateDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PrivateDealsV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PrivateDealsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PrivateDealsV3Api;

    /**
     * Decodes a PrivateDealsV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PrivateDealsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PrivateDealsV3Api;

    /**
     * Verifies a PrivateDealsV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PrivateDealsV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PrivateDealsV3Api
     */
    public static fromObject(object: { [k: string]: any }): PrivateDealsV3Api;

    /**
     * Creates a plain object from a PrivateDealsV3Api message. Also converts values to other types if specified.
     * @param message PrivateDealsV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PrivateDealsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PrivateDealsV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PrivateDealsV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PrivateOrdersV3Api. */
export interface IPrivateOrdersV3Api {

    /** PrivateOrdersV3Api id */
    id?: (string|null);

    /** PrivateOrdersV3Api clientId */
    clientId?: (string|null);

    /** PrivateOrdersV3Api price */
    price?: (string|null);

    /** PrivateOrdersV3Api quantity */
    quantity?: (string|null);

    /** PrivateOrdersV3Api amount */
    amount?: (string|null);

    /** PrivateOrdersV3Api avgPrice */
    avgPrice?: (string|null);

    /** PrivateOrdersV3Api orderType */
    orderType?: (number|null);

    /** PrivateOrdersV3Api tradeType */
    tradeType?: (number|null);

    /** PrivateOrdersV3Api isMaker */
    isMaker?: (boolean|null);

    /** PrivateOrdersV3Api remainAmount */
    remainAmount?: (string|null);

    /** PrivateOrdersV3Api remainQuantity */
    remainQuantity?: (string|null);

    /** PrivateOrdersV3Api lastDealQuantity */
    lastDealQuantity?: (string|null);

    /** PrivateOrdersV3Api cumulativeQuantity */
    cumulativeQuantity?: (string|null);

    /** PrivateOrdersV3Api cumulativeAmount */
    cumulativeAmount?: (string|null);

    /** PrivateOrdersV3Api status */
    status?: (number|null);

    /** PrivateOrdersV3Api createTime */
    createTime?: (number|Long|null);

    /** PrivateOrdersV3Api market */
    market?: (string|null);

    /** PrivateOrdersV3Api triggerType */
    triggerType?: (number|null);

    /** PrivateOrdersV3Api triggerPrice */
    triggerPrice?: (string|null);

    /** PrivateOrdersV3Api state */
    state?: (number|null);

    /** PrivateOrdersV3Api ocoId */
    ocoId?: (string|null);

    /** PrivateOrdersV3Api routeFactor */
    routeFactor?: (string|null);

    /** PrivateOrdersV3Api symbolId */
    symbolId?: (string|null);

    /** PrivateOrdersV3Api marketId */
    marketId?: (string|null);

    /** PrivateOrdersV3Api marketCurrencyId */
    marketCurrencyId?: (string|null);

    /** PrivateOrdersV3Api currencyId */
    currencyId?: (string|null);
}

/** Represents a PrivateOrdersV3Api. */
export class PrivateOrdersV3Api implements IPrivateOrdersV3Api {

    /**
     * Constructs a new PrivateOrdersV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPrivateOrdersV3Api);

    /** PrivateOrdersV3Api id. */
    public id: string;

    /** PrivateOrdersV3Api clientId. */
    public clientId: string;

    /** PrivateOrdersV3Api price. */
    public price: string;

    /** PrivateOrdersV3Api quantity. */
    public quantity: string;

    /** PrivateOrdersV3Api amount. */
    public amount: string;

    /** PrivateOrdersV3Api avgPrice. */
    public avgPrice: string;

    /** PrivateOrdersV3Api orderType. */
    public orderType: number;

    /** PrivateOrdersV3Api tradeType. */
    public tradeType: number;

    /** PrivateOrdersV3Api isMaker. */
    public isMaker: boolean;

    /** PrivateOrdersV3Api remainAmount. */
    public remainAmount: string;

    /** PrivateOrdersV3Api remainQuantity. */
    public remainQuantity: string;

    /** PrivateOrdersV3Api lastDealQuantity. */
    public lastDealQuantity?: (string|null);

    /** PrivateOrdersV3Api cumulativeQuantity. */
    public cumulativeQuantity: string;

    /** PrivateOrdersV3Api cumulativeAmount. */
    public cumulativeAmount: string;

    /** PrivateOrdersV3Api status. */
    public status: number;

    /** PrivateOrdersV3Api createTime. */
    public createTime: (number|Long);

    /** PrivateOrdersV3Api market. */
    public market?: (string|null);

    /** PrivateOrdersV3Api triggerType. */
    public triggerType?: (number|null);

    /** PrivateOrdersV3Api triggerPrice. */
    public triggerPrice?: (string|null);

    /** PrivateOrdersV3Api state. */
    public state?: (number|null);

    /** PrivateOrdersV3Api ocoId. */
    public ocoId?: (string|null);

    /** PrivateOrdersV3Api routeFactor. */
    public routeFactor?: (string|null);

    /** PrivateOrdersV3Api symbolId. */
    public symbolId?: (string|null);

    /** PrivateOrdersV3Api marketId. */
    public marketId?: (string|null);

    /** PrivateOrdersV3Api marketCurrencyId. */
    public marketCurrencyId?: (string|null);

    /** PrivateOrdersV3Api currencyId. */
    public currencyId?: (string|null);

    /**
     * Creates a new PrivateOrdersV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PrivateOrdersV3Api instance
     */
    public static create(properties?: IPrivateOrdersV3Api): PrivateOrdersV3Api;

    /**
     * Encodes the specified PrivateOrdersV3Api message. Does not implicitly {@link PrivateOrdersV3Api.verify|verify} messages.
     * @param message PrivateOrdersV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPrivateOrdersV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PrivateOrdersV3Api message, length delimited. Does not implicitly {@link PrivateOrdersV3Api.verify|verify} messages.
     * @param message PrivateOrdersV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPrivateOrdersV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PrivateOrdersV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PrivateOrdersV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PrivateOrdersV3Api;

    /**
     * Decodes a PrivateOrdersV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PrivateOrdersV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PrivateOrdersV3Api;

    /**
     * Verifies a PrivateOrdersV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PrivateOrdersV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PrivateOrdersV3Api
     */
    public static fromObject(object: { [k: string]: any }): PrivateOrdersV3Api;

    /**
     * Creates a plain object from a PrivateOrdersV3Api message. Also converts values to other types if specified.
     * @param message PrivateOrdersV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PrivateOrdersV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PrivateOrdersV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PrivateOrdersV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicAggreBookTickerV3Api. */
export interface IPublicAggreBookTickerV3Api {

    /** PublicAggreBookTickerV3Api bidPrice */
    bidPrice?: (string|null);

    /** PublicAggreBookTickerV3Api bidQuantity */
    bidQuantity?: (string|null);

    /** PublicAggreBookTickerV3Api askPrice */
    askPrice?: (string|null);

    /** PublicAggreBookTickerV3Api askQuantity */
    askQuantity?: (string|null);
}

/** Represents a PublicAggreBookTickerV3Api. */
export class PublicAggreBookTickerV3Api implements IPublicAggreBookTickerV3Api {

    /**
     * Constructs a new PublicAggreBookTickerV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicAggreBookTickerV3Api);

    /** PublicAggreBookTickerV3Api bidPrice. */
    public bidPrice: string;

    /** PublicAggreBookTickerV3Api bidQuantity. */
    public bidQuantity: string;

    /** PublicAggreBookTickerV3Api askPrice. */
    public askPrice: string;

    /** PublicAggreBookTickerV3Api askQuantity. */
    public askQuantity: string;

    /**
     * Creates a new PublicAggreBookTickerV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicAggreBookTickerV3Api instance
     */
    public static create(properties?: IPublicAggreBookTickerV3Api): PublicAggreBookTickerV3Api;

    /**
     * Encodes the specified PublicAggreBookTickerV3Api message. Does not implicitly {@link PublicAggreBookTickerV3Api.verify|verify} messages.
     * @param message PublicAggreBookTickerV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicAggreBookTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicAggreBookTickerV3Api message, length delimited. Does not implicitly {@link PublicAggreBookTickerV3Api.verify|verify} messages.
     * @param message PublicAggreBookTickerV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicAggreBookTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicAggreBookTickerV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicAggreBookTickerV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicAggreBookTickerV3Api;

    /**
     * Decodes a PublicAggreBookTickerV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicAggreBookTickerV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicAggreBookTickerV3Api;

    /**
     * Verifies a PublicAggreBookTickerV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicAggreBookTickerV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicAggreBookTickerV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicAggreBookTickerV3Api;

    /**
     * Creates a plain object from a PublicAggreBookTickerV3Api message. Also converts values to other types if specified.
     * @param message PublicAggreBookTickerV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicAggreBookTickerV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicAggreBookTickerV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicAggreBookTickerV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicAggreDealsV3Api. */
export interface IPublicAggreDealsV3Api {

    /** PublicAggreDealsV3Api deals */
    deals?: (IPublicAggreDealsV3ApiItem[]|null);

    /** PublicAggreDealsV3Api eventType */
    eventType?: (string|null);
}

/** Represents a PublicAggreDealsV3Api. */
export class PublicAggreDealsV3Api implements IPublicAggreDealsV3Api {

    /**
     * Constructs a new PublicAggreDealsV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicAggreDealsV3Api);

    /** PublicAggreDealsV3Api deals. */
    public deals: IPublicAggreDealsV3ApiItem[];

    /** PublicAggreDealsV3Api eventType. */
    public eventType: string;

    /**
     * Creates a new PublicAggreDealsV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicAggreDealsV3Api instance
     */
    public static create(properties?: IPublicAggreDealsV3Api): PublicAggreDealsV3Api;

    /**
     * Encodes the specified PublicAggreDealsV3Api message. Does not implicitly {@link PublicAggreDealsV3Api.verify|verify} messages.
     * @param message PublicAggreDealsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicAggreDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicAggreDealsV3Api message, length delimited. Does not implicitly {@link PublicAggreDealsV3Api.verify|verify} messages.
     * @param message PublicAggreDealsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicAggreDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicAggreDealsV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicAggreDealsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicAggreDealsV3Api;

    /**
     * Decodes a PublicAggreDealsV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicAggreDealsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicAggreDealsV3Api;

    /**
     * Verifies a PublicAggreDealsV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicAggreDealsV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicAggreDealsV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicAggreDealsV3Api;

    /**
     * Creates a plain object from a PublicAggreDealsV3Api message. Also converts values to other types if specified.
     * @param message PublicAggreDealsV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicAggreDealsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicAggreDealsV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicAggreDealsV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicAggreDealsV3ApiItem. */
export interface IPublicAggreDealsV3ApiItem {

    /** PublicAggreDealsV3ApiItem price */
    price?: (string|null);

    /** PublicAggreDealsV3ApiItem quantity */
    quantity?: (string|null);

    /** PublicAggreDealsV3ApiItem tradeType */
    tradeType?: (number|null);

    /** PublicAggreDealsV3ApiItem time */
    time?: (number|Long|null);
}

/** Represents a PublicAggreDealsV3ApiItem. */
export class PublicAggreDealsV3ApiItem implements IPublicAggreDealsV3ApiItem {

    /**
     * Constructs a new PublicAggreDealsV3ApiItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicAggreDealsV3ApiItem);

    /** PublicAggreDealsV3ApiItem price. */
    public price: string;

    /** PublicAggreDealsV3ApiItem quantity. */
    public quantity: string;

    /** PublicAggreDealsV3ApiItem tradeType. */
    public tradeType: number;

    /** PublicAggreDealsV3ApiItem time. */
    public time: (number|Long);

    /**
     * Creates a new PublicAggreDealsV3ApiItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicAggreDealsV3ApiItem instance
     */
    public static create(properties?: IPublicAggreDealsV3ApiItem): PublicAggreDealsV3ApiItem;

    /**
     * Encodes the specified PublicAggreDealsV3ApiItem message. Does not implicitly {@link PublicAggreDealsV3ApiItem.verify|verify} messages.
     * @param message PublicAggreDealsV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicAggreDealsV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicAggreDealsV3ApiItem message, length delimited. Does not implicitly {@link PublicAggreDealsV3ApiItem.verify|verify} messages.
     * @param message PublicAggreDealsV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicAggreDealsV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicAggreDealsV3ApiItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicAggreDealsV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicAggreDealsV3ApiItem;

    /**
     * Decodes a PublicAggreDealsV3ApiItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicAggreDealsV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicAggreDealsV3ApiItem;

    /**
     * Verifies a PublicAggreDealsV3ApiItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicAggreDealsV3ApiItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicAggreDealsV3ApiItem
     */
    public static fromObject(object: { [k: string]: any }): PublicAggreDealsV3ApiItem;

    /**
     * Creates a plain object from a PublicAggreDealsV3ApiItem message. Also converts values to other types if specified.
     * @param message PublicAggreDealsV3ApiItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicAggreDealsV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicAggreDealsV3ApiItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicAggreDealsV3ApiItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicAggreDepthsV3Api. */
export interface IPublicAggreDepthsV3Api {

    /** PublicAggreDepthsV3Api asks */
    asks?: (IPublicAggreDepthV3ApiItem[]|null);

    /** PublicAggreDepthsV3Api bids */
    bids?: (IPublicAggreDepthV3ApiItem[]|null);

    /** PublicAggreDepthsV3Api eventType */
    eventType?: (string|null);

    /** PublicAggreDepthsV3Api fromVersion */
    fromVersion?: (string|null);

    /** PublicAggreDepthsV3Api toVersion */
    toVersion?: (string|null);
}

/** Represents a PublicAggreDepthsV3Api. */
export class PublicAggreDepthsV3Api implements IPublicAggreDepthsV3Api {

    /**
     * Constructs a new PublicAggreDepthsV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicAggreDepthsV3Api);

    /** PublicAggreDepthsV3Api asks. */
    public asks: IPublicAggreDepthV3ApiItem[];

    /** PublicAggreDepthsV3Api bids. */
    public bids: IPublicAggreDepthV3ApiItem[];

    /** PublicAggreDepthsV3Api eventType. */
    public eventType: string;

    /** PublicAggreDepthsV3Api fromVersion. */
    public fromVersion: string;

    /** PublicAggreDepthsV3Api toVersion. */
    public toVersion: string;

    /**
     * Creates a new PublicAggreDepthsV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicAggreDepthsV3Api instance
     */
    public static create(properties?: IPublicAggreDepthsV3Api): PublicAggreDepthsV3Api;

    /**
     * Encodes the specified PublicAggreDepthsV3Api message. Does not implicitly {@link PublicAggreDepthsV3Api.verify|verify} messages.
     * @param message PublicAggreDepthsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicAggreDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicAggreDepthsV3Api message, length delimited. Does not implicitly {@link PublicAggreDepthsV3Api.verify|verify} messages.
     * @param message PublicAggreDepthsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicAggreDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicAggreDepthsV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicAggreDepthsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicAggreDepthsV3Api;

    /**
     * Decodes a PublicAggreDepthsV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicAggreDepthsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicAggreDepthsV3Api;

    /**
     * Verifies a PublicAggreDepthsV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicAggreDepthsV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicAggreDepthsV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicAggreDepthsV3Api;

    /**
     * Creates a plain object from a PublicAggreDepthsV3Api message. Also converts values to other types if specified.
     * @param message PublicAggreDepthsV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicAggreDepthsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicAggreDepthsV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicAggreDepthsV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicAggreDepthV3ApiItem. */
export interface IPublicAggreDepthV3ApiItem {

    /** PublicAggreDepthV3ApiItem price */
    price?: (string|null);

    /** PublicAggreDepthV3ApiItem quantity */
    quantity?: (string|null);
}

/** Represents a PublicAggreDepthV3ApiItem. */
export class PublicAggreDepthV3ApiItem implements IPublicAggreDepthV3ApiItem {

    /**
     * Constructs a new PublicAggreDepthV3ApiItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicAggreDepthV3ApiItem);

    /** PublicAggreDepthV3ApiItem price. */
    public price: string;

    /** PublicAggreDepthV3ApiItem quantity. */
    public quantity: string;

    /**
     * Creates a new PublicAggreDepthV3ApiItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicAggreDepthV3ApiItem instance
     */
    public static create(properties?: IPublicAggreDepthV3ApiItem): PublicAggreDepthV3ApiItem;

    /**
     * Encodes the specified PublicAggreDepthV3ApiItem message. Does not implicitly {@link PublicAggreDepthV3ApiItem.verify|verify} messages.
     * @param message PublicAggreDepthV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicAggreDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicAggreDepthV3ApiItem message, length delimited. Does not implicitly {@link PublicAggreDepthV3ApiItem.verify|verify} messages.
     * @param message PublicAggreDepthV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicAggreDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicAggreDepthV3ApiItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicAggreDepthV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicAggreDepthV3ApiItem;

    /**
     * Decodes a PublicAggreDepthV3ApiItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicAggreDepthV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicAggreDepthV3ApiItem;

    /**
     * Verifies a PublicAggreDepthV3ApiItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicAggreDepthV3ApiItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicAggreDepthV3ApiItem
     */
    public static fromObject(object: { [k: string]: any }): PublicAggreDepthV3ApiItem;

    /**
     * Creates a plain object from a PublicAggreDepthV3ApiItem message. Also converts values to other types if specified.
     * @param message PublicAggreDepthV3ApiItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicAggreDepthV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicAggreDepthV3ApiItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicAggreDepthV3ApiItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicBookTickerBatchV3Api. */
export interface IPublicBookTickerBatchV3Api {

    /** PublicBookTickerBatchV3Api items */
    items?: (IPublicBookTickerV3Api[]|null);
}

/** Represents a PublicBookTickerBatchV3Api. */
export class PublicBookTickerBatchV3Api implements IPublicBookTickerBatchV3Api {

    /**
     * Constructs a new PublicBookTickerBatchV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicBookTickerBatchV3Api);

    /** PublicBookTickerBatchV3Api items. */
    public items: IPublicBookTickerV3Api[];

    /**
     * Creates a new PublicBookTickerBatchV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicBookTickerBatchV3Api instance
     */
    public static create(properties?: IPublicBookTickerBatchV3Api): PublicBookTickerBatchV3Api;

    /**
     * Encodes the specified PublicBookTickerBatchV3Api message. Does not implicitly {@link PublicBookTickerBatchV3Api.verify|verify} messages.
     * @param message PublicBookTickerBatchV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicBookTickerBatchV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicBookTickerBatchV3Api message, length delimited. Does not implicitly {@link PublicBookTickerBatchV3Api.verify|verify} messages.
     * @param message PublicBookTickerBatchV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicBookTickerBatchV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicBookTickerBatchV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicBookTickerBatchV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicBookTickerBatchV3Api;

    /**
     * Decodes a PublicBookTickerBatchV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicBookTickerBatchV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicBookTickerBatchV3Api;

    /**
     * Verifies a PublicBookTickerBatchV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicBookTickerBatchV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicBookTickerBatchV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicBookTickerBatchV3Api;

    /**
     * Creates a plain object from a PublicBookTickerBatchV3Api message. Also converts values to other types if specified.
     * @param message PublicBookTickerBatchV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicBookTickerBatchV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicBookTickerBatchV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicBookTickerBatchV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicBookTickerV3Api. */
export interface IPublicBookTickerV3Api {

    /** PublicBookTickerV3Api bidPrice */
    bidPrice?: (string|null);

    /** PublicBookTickerV3Api bidQuantity */
    bidQuantity?: (string|null);

    /** PublicBookTickerV3Api askPrice */
    askPrice?: (string|null);

    /** PublicBookTickerV3Api askQuantity */
    askQuantity?: (string|null);
}

/** Represents a PublicBookTickerV3Api. */
export class PublicBookTickerV3Api implements IPublicBookTickerV3Api {

    /**
     * Constructs a new PublicBookTickerV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicBookTickerV3Api);

    /** PublicBookTickerV3Api bidPrice. */
    public bidPrice: string;

    /** PublicBookTickerV3Api bidQuantity. */
    public bidQuantity: string;

    /** PublicBookTickerV3Api askPrice. */
    public askPrice: string;

    /** PublicBookTickerV3Api askQuantity. */
    public askQuantity: string;

    /**
     * Creates a new PublicBookTickerV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicBookTickerV3Api instance
     */
    public static create(properties?: IPublicBookTickerV3Api): PublicBookTickerV3Api;

    /**
     * Encodes the specified PublicBookTickerV3Api message. Does not implicitly {@link PublicBookTickerV3Api.verify|verify} messages.
     * @param message PublicBookTickerV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicBookTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicBookTickerV3Api message, length delimited. Does not implicitly {@link PublicBookTickerV3Api.verify|verify} messages.
     * @param message PublicBookTickerV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicBookTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicBookTickerV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicBookTickerV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicBookTickerV3Api;

    /**
     * Decodes a PublicBookTickerV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicBookTickerV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicBookTickerV3Api;

    /**
     * Verifies a PublicBookTickerV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicBookTickerV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicBookTickerV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicBookTickerV3Api;

    /**
     * Creates a plain object from a PublicBookTickerV3Api message. Also converts values to other types if specified.
     * @param message PublicBookTickerV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicBookTickerV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicBookTickerV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicBookTickerV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicDealsV3Api. */
export interface IPublicDealsV3Api {

    /** PublicDealsV3Api deals */
    deals?: (IPublicDealsV3ApiItem[]|null);

    /** PublicDealsV3Api eventType */
    eventType?: (string|null);
}

/** Represents a PublicDealsV3Api. */
export class PublicDealsV3Api implements IPublicDealsV3Api {

    /**
     * Constructs a new PublicDealsV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicDealsV3Api);

    /** PublicDealsV3Api deals. */
    public deals: IPublicDealsV3ApiItem[];

    /** PublicDealsV3Api eventType. */
    public eventType: string;

    /**
     * Creates a new PublicDealsV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicDealsV3Api instance
     */
    public static create(properties?: IPublicDealsV3Api): PublicDealsV3Api;

    /**
     * Encodes the specified PublicDealsV3Api message. Does not implicitly {@link PublicDealsV3Api.verify|verify} messages.
     * @param message PublicDealsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicDealsV3Api message, length delimited. Does not implicitly {@link PublicDealsV3Api.verify|verify} messages.
     * @param message PublicDealsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicDealsV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicDealsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicDealsV3Api;

    /**
     * Decodes a PublicDealsV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicDealsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicDealsV3Api;

    /**
     * Verifies a PublicDealsV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicDealsV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicDealsV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicDealsV3Api;

    /**
     * Creates a plain object from a PublicDealsV3Api message. Also converts values to other types if specified.
     * @param message PublicDealsV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicDealsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicDealsV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicDealsV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicDealsV3ApiItem. */
export interface IPublicDealsV3ApiItem {

    /** PublicDealsV3ApiItem price */
    price?: (string|null);

    /** PublicDealsV3ApiItem quantity */
    quantity?: (string|null);

    /** PublicDealsV3ApiItem tradeType */
    tradeType?: (number|null);

    /** PublicDealsV3ApiItem time */
    time?: (number|Long|null);
}

/** Represents a PublicDealsV3ApiItem. */
export class PublicDealsV3ApiItem implements IPublicDealsV3ApiItem {

    /**
     * Constructs a new PublicDealsV3ApiItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicDealsV3ApiItem);

    /** PublicDealsV3ApiItem price. */
    public price: string;

    /** PublicDealsV3ApiItem quantity. */
    public quantity: string;

    /** PublicDealsV3ApiItem tradeType. */
    public tradeType: number;

    /** PublicDealsV3ApiItem time. */
    public time: (number|Long);

    /**
     * Creates a new PublicDealsV3ApiItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicDealsV3ApiItem instance
     */
    public static create(properties?: IPublicDealsV3ApiItem): PublicDealsV3ApiItem;

    /**
     * Encodes the specified PublicDealsV3ApiItem message. Does not implicitly {@link PublicDealsV3ApiItem.verify|verify} messages.
     * @param message PublicDealsV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicDealsV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicDealsV3ApiItem message, length delimited. Does not implicitly {@link PublicDealsV3ApiItem.verify|verify} messages.
     * @param message PublicDealsV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicDealsV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicDealsV3ApiItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicDealsV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicDealsV3ApiItem;

    /**
     * Decodes a PublicDealsV3ApiItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicDealsV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicDealsV3ApiItem;

    /**
     * Verifies a PublicDealsV3ApiItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicDealsV3ApiItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicDealsV3ApiItem
     */
    public static fromObject(object: { [k: string]: any }): PublicDealsV3ApiItem;

    /**
     * Creates a plain object from a PublicDealsV3ApiItem message. Also converts values to other types if specified.
     * @param message PublicDealsV3ApiItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicDealsV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicDealsV3ApiItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicDealsV3ApiItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicIncreaseDepthsBatchV3Api. */
export interface IPublicIncreaseDepthsBatchV3Api {

    /** PublicIncreaseDepthsBatchV3Api items */
    items?: (IPublicIncreaseDepthsV3Api[]|null);

    /** PublicIncreaseDepthsBatchV3Api eventType */
    eventType?: (string|null);
}

/** Represents a PublicIncreaseDepthsBatchV3Api. */
export class PublicIncreaseDepthsBatchV3Api implements IPublicIncreaseDepthsBatchV3Api {

    /**
     * Constructs a new PublicIncreaseDepthsBatchV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicIncreaseDepthsBatchV3Api);

    /** PublicIncreaseDepthsBatchV3Api items. */
    public items: IPublicIncreaseDepthsV3Api[];

    /** PublicIncreaseDepthsBatchV3Api eventType. */
    public eventType: string;

    /**
     * Creates a new PublicIncreaseDepthsBatchV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicIncreaseDepthsBatchV3Api instance
     */
    public static create(properties?: IPublicIncreaseDepthsBatchV3Api): PublicIncreaseDepthsBatchV3Api;

    /**
     * Encodes the specified PublicIncreaseDepthsBatchV3Api message. Does not implicitly {@link PublicIncreaseDepthsBatchV3Api.verify|verify} messages.
     * @param message PublicIncreaseDepthsBatchV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicIncreaseDepthsBatchV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicIncreaseDepthsBatchV3Api message, length delimited. Does not implicitly {@link PublicIncreaseDepthsBatchV3Api.verify|verify} messages.
     * @param message PublicIncreaseDepthsBatchV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicIncreaseDepthsBatchV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicIncreaseDepthsBatchV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicIncreaseDepthsBatchV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicIncreaseDepthsBatchV3Api;

    /**
     * Decodes a PublicIncreaseDepthsBatchV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicIncreaseDepthsBatchV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicIncreaseDepthsBatchV3Api;

    /**
     * Verifies a PublicIncreaseDepthsBatchV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicIncreaseDepthsBatchV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicIncreaseDepthsBatchV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicIncreaseDepthsBatchV3Api;

    /**
     * Creates a plain object from a PublicIncreaseDepthsBatchV3Api message. Also converts values to other types if specified.
     * @param message PublicIncreaseDepthsBatchV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicIncreaseDepthsBatchV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicIncreaseDepthsBatchV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicIncreaseDepthsBatchV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicIncreaseDepthsV3Api. */
export interface IPublicIncreaseDepthsV3Api {

    /** PublicIncreaseDepthsV3Api asks */
    asks?: (IPublicIncreaseDepthV3ApiItem[]|null);

    /** PublicIncreaseDepthsV3Api bids */
    bids?: (IPublicIncreaseDepthV3ApiItem[]|null);

    /** PublicIncreaseDepthsV3Api eventType */
    eventType?: (string|null);

    /** PublicIncreaseDepthsV3Api version */
    version?: (string|null);
}

/** Represents a PublicIncreaseDepthsV3Api. */
export class PublicIncreaseDepthsV3Api implements IPublicIncreaseDepthsV3Api {

    /**
     * Constructs a new PublicIncreaseDepthsV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicIncreaseDepthsV3Api);

    /** PublicIncreaseDepthsV3Api asks. */
    public asks: IPublicIncreaseDepthV3ApiItem[];

    /** PublicIncreaseDepthsV3Api bids. */
    public bids: IPublicIncreaseDepthV3ApiItem[];

    /** PublicIncreaseDepthsV3Api eventType. */
    public eventType: string;

    /** PublicIncreaseDepthsV3Api version. */
    public version: string;

    /**
     * Creates a new PublicIncreaseDepthsV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicIncreaseDepthsV3Api instance
     */
    public static create(properties?: IPublicIncreaseDepthsV3Api): PublicIncreaseDepthsV3Api;

    /**
     * Encodes the specified PublicIncreaseDepthsV3Api message. Does not implicitly {@link PublicIncreaseDepthsV3Api.verify|verify} messages.
     * @param message PublicIncreaseDepthsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicIncreaseDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicIncreaseDepthsV3Api message, length delimited. Does not implicitly {@link PublicIncreaseDepthsV3Api.verify|verify} messages.
     * @param message PublicIncreaseDepthsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicIncreaseDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicIncreaseDepthsV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicIncreaseDepthsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicIncreaseDepthsV3Api;

    /**
     * Decodes a PublicIncreaseDepthsV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicIncreaseDepthsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicIncreaseDepthsV3Api;

    /**
     * Verifies a PublicIncreaseDepthsV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicIncreaseDepthsV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicIncreaseDepthsV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicIncreaseDepthsV3Api;

    /**
     * Creates a plain object from a PublicIncreaseDepthsV3Api message. Also converts values to other types if specified.
     * @param message PublicIncreaseDepthsV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicIncreaseDepthsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicIncreaseDepthsV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicIncreaseDepthsV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicIncreaseDepthV3ApiItem. */
export interface IPublicIncreaseDepthV3ApiItem {

    /** PublicIncreaseDepthV3ApiItem price */
    price?: (string|null);

    /** PublicIncreaseDepthV3ApiItem quantity */
    quantity?: (string|null);
}

/** Represents a PublicIncreaseDepthV3ApiItem. */
export class PublicIncreaseDepthV3ApiItem implements IPublicIncreaseDepthV3ApiItem {

    /**
     * Constructs a new PublicIncreaseDepthV3ApiItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicIncreaseDepthV3ApiItem);

    /** PublicIncreaseDepthV3ApiItem price. */
    public price: string;

    /** PublicIncreaseDepthV3ApiItem quantity. */
    public quantity: string;

    /**
     * Creates a new PublicIncreaseDepthV3ApiItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicIncreaseDepthV3ApiItem instance
     */
    public static create(properties?: IPublicIncreaseDepthV3ApiItem): PublicIncreaseDepthV3ApiItem;

    /**
     * Encodes the specified PublicIncreaseDepthV3ApiItem message. Does not implicitly {@link PublicIncreaseDepthV3ApiItem.verify|verify} messages.
     * @param message PublicIncreaseDepthV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicIncreaseDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicIncreaseDepthV3ApiItem message, length delimited. Does not implicitly {@link PublicIncreaseDepthV3ApiItem.verify|verify} messages.
     * @param message PublicIncreaseDepthV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicIncreaseDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicIncreaseDepthV3ApiItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicIncreaseDepthV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicIncreaseDepthV3ApiItem;

    /**
     * Decodes a PublicIncreaseDepthV3ApiItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicIncreaseDepthV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicIncreaseDepthV3ApiItem;

    /**
     * Verifies a PublicIncreaseDepthV3ApiItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicIncreaseDepthV3ApiItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicIncreaseDepthV3ApiItem
     */
    public static fromObject(object: { [k: string]: any }): PublicIncreaseDepthV3ApiItem;

    /**
     * Creates a plain object from a PublicIncreaseDepthV3ApiItem message. Also converts values to other types if specified.
     * @param message PublicIncreaseDepthV3ApiItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicIncreaseDepthV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicIncreaseDepthV3ApiItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicIncreaseDepthV3ApiItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicLimitDepthsV3Api. */
export interface IPublicLimitDepthsV3Api {

    /** PublicLimitDepthsV3Api asks */
    asks?: (IPublicLimitDepthV3ApiItem[]|null);

    /** PublicLimitDepthsV3Api bids */
    bids?: (IPublicLimitDepthV3ApiItem[]|null);

    /** PublicLimitDepthsV3Api eventType */
    eventType?: (string|null);

    /** PublicLimitDepthsV3Api version */
    version?: (string|null);
}

/** Represents a PublicLimitDepthsV3Api. */
export class PublicLimitDepthsV3Api implements IPublicLimitDepthsV3Api {

    /**
     * Constructs a new PublicLimitDepthsV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicLimitDepthsV3Api);

    /** PublicLimitDepthsV3Api asks. */
    public asks: IPublicLimitDepthV3ApiItem[];

    /** PublicLimitDepthsV3Api bids. */
    public bids: IPublicLimitDepthV3ApiItem[];

    /** PublicLimitDepthsV3Api eventType. */
    public eventType: string;

    /** PublicLimitDepthsV3Api version. */
    public version: string;

    /**
     * Creates a new PublicLimitDepthsV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicLimitDepthsV3Api instance
     */
    public static create(properties?: IPublicLimitDepthsV3Api): PublicLimitDepthsV3Api;

    /**
     * Encodes the specified PublicLimitDepthsV3Api message. Does not implicitly {@link PublicLimitDepthsV3Api.verify|verify} messages.
     * @param message PublicLimitDepthsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicLimitDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicLimitDepthsV3Api message, length delimited. Does not implicitly {@link PublicLimitDepthsV3Api.verify|verify} messages.
     * @param message PublicLimitDepthsV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicLimitDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicLimitDepthsV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicLimitDepthsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicLimitDepthsV3Api;

    /**
     * Decodes a PublicLimitDepthsV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicLimitDepthsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicLimitDepthsV3Api;

    /**
     * Verifies a PublicLimitDepthsV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicLimitDepthsV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicLimitDepthsV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicLimitDepthsV3Api;

    /**
     * Creates a plain object from a PublicLimitDepthsV3Api message. Also converts values to other types if specified.
     * @param message PublicLimitDepthsV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicLimitDepthsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicLimitDepthsV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicLimitDepthsV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicLimitDepthV3ApiItem. */
export interface IPublicLimitDepthV3ApiItem {

    /** PublicLimitDepthV3ApiItem price */
    price?: (string|null);

    /** PublicLimitDepthV3ApiItem quantity */
    quantity?: (string|null);
}

/** Represents a PublicLimitDepthV3ApiItem. */
export class PublicLimitDepthV3ApiItem implements IPublicLimitDepthV3ApiItem {

    /**
     * Constructs a new PublicLimitDepthV3ApiItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicLimitDepthV3ApiItem);

    /** PublicLimitDepthV3ApiItem price. */
    public price: string;

    /** PublicLimitDepthV3ApiItem quantity. */
    public quantity: string;

    /**
     * Creates a new PublicLimitDepthV3ApiItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicLimitDepthV3ApiItem instance
     */
    public static create(properties?: IPublicLimitDepthV3ApiItem): PublicLimitDepthV3ApiItem;

    /**
     * Encodes the specified PublicLimitDepthV3ApiItem message. Does not implicitly {@link PublicLimitDepthV3ApiItem.verify|verify} messages.
     * @param message PublicLimitDepthV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicLimitDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicLimitDepthV3ApiItem message, length delimited. Does not implicitly {@link PublicLimitDepthV3ApiItem.verify|verify} messages.
     * @param message PublicLimitDepthV3ApiItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicLimitDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicLimitDepthV3ApiItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicLimitDepthV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicLimitDepthV3ApiItem;

    /**
     * Decodes a PublicLimitDepthV3ApiItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicLimitDepthV3ApiItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicLimitDepthV3ApiItem;

    /**
     * Verifies a PublicLimitDepthV3ApiItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicLimitDepthV3ApiItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicLimitDepthV3ApiItem
     */
    public static fromObject(object: { [k: string]: any }): PublicLimitDepthV3ApiItem;

    /**
     * Creates a plain object from a PublicLimitDepthV3ApiItem message. Also converts values to other types if specified.
     * @param message PublicLimitDepthV3ApiItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicLimitDepthV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicLimitDepthV3ApiItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicLimitDepthV3ApiItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicMiniTickersV3Api. */
export interface IPublicMiniTickersV3Api {

    /** PublicMiniTickersV3Api items */
    items?: (IPublicMiniTickerV3Api[]|null);
}

/** Represents a PublicMiniTickersV3Api. */
export class PublicMiniTickersV3Api implements IPublicMiniTickersV3Api {

    /**
     * Constructs a new PublicMiniTickersV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicMiniTickersV3Api);

    /** PublicMiniTickersV3Api items. */
    public items: IPublicMiniTickerV3Api[];

    /**
     * Creates a new PublicMiniTickersV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicMiniTickersV3Api instance
     */
    public static create(properties?: IPublicMiniTickersV3Api): PublicMiniTickersV3Api;

    /**
     * Encodes the specified PublicMiniTickersV3Api message. Does not implicitly {@link PublicMiniTickersV3Api.verify|verify} messages.
     * @param message PublicMiniTickersV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicMiniTickersV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicMiniTickersV3Api message, length delimited. Does not implicitly {@link PublicMiniTickersV3Api.verify|verify} messages.
     * @param message PublicMiniTickersV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicMiniTickersV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicMiniTickersV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicMiniTickersV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicMiniTickersV3Api;

    /**
     * Decodes a PublicMiniTickersV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicMiniTickersV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicMiniTickersV3Api;

    /**
     * Verifies a PublicMiniTickersV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicMiniTickersV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicMiniTickersV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicMiniTickersV3Api;

    /**
     * Creates a plain object from a PublicMiniTickersV3Api message. Also converts values to other types if specified.
     * @param message PublicMiniTickersV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicMiniTickersV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicMiniTickersV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicMiniTickersV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicMiniTickerV3Api. */
export interface IPublicMiniTickerV3Api {

    /** PublicMiniTickerV3Api symbol */
    symbol?: (string|null);

    /** PublicMiniTickerV3Api price */
    price?: (string|null);

    /** PublicMiniTickerV3Api rate */
    rate?: (string|null);

    /** PublicMiniTickerV3Api zonedRate */
    zonedRate?: (string|null);

    /** PublicMiniTickerV3Api high */
    high?: (string|null);

    /** PublicMiniTickerV3Api low */
    low?: (string|null);

    /** PublicMiniTickerV3Api volume */
    volume?: (string|null);

    /** PublicMiniTickerV3Api quantity */
    quantity?: (string|null);

    /** PublicMiniTickerV3Api lastCloseRate */
    lastCloseRate?: (string|null);

    /** PublicMiniTickerV3Api lastCloseZonedRate */
    lastCloseZonedRate?: (string|null);

    /** PublicMiniTickerV3Api lastCloseHigh */
    lastCloseHigh?: (string|null);

    /** PublicMiniTickerV3Api lastCloseLow */
    lastCloseLow?: (string|null);
}

/** Represents a PublicMiniTickerV3Api. */
export class PublicMiniTickerV3Api implements IPublicMiniTickerV3Api {

    /**
     * Constructs a new PublicMiniTickerV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicMiniTickerV3Api);

    /** PublicMiniTickerV3Api symbol. */
    public symbol: string;

    /** PublicMiniTickerV3Api price. */
    public price: string;

    /** PublicMiniTickerV3Api rate. */
    public rate: string;

    /** PublicMiniTickerV3Api zonedRate. */
    public zonedRate: string;

    /** PublicMiniTickerV3Api high. */
    public high: string;

    /** PublicMiniTickerV3Api low. */
    public low: string;

    /** PublicMiniTickerV3Api volume. */
    public volume: string;

    /** PublicMiniTickerV3Api quantity. */
    public quantity: string;

    /** PublicMiniTickerV3Api lastCloseRate. */
    public lastCloseRate: string;

    /** PublicMiniTickerV3Api lastCloseZonedRate. */
    public lastCloseZonedRate: string;

    /** PublicMiniTickerV3Api lastCloseHigh. */
    public lastCloseHigh: string;

    /** PublicMiniTickerV3Api lastCloseLow. */
    public lastCloseLow: string;

    /**
     * Creates a new PublicMiniTickerV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicMiniTickerV3Api instance
     */
    public static create(properties?: IPublicMiniTickerV3Api): PublicMiniTickerV3Api;

    /**
     * Encodes the specified PublicMiniTickerV3Api message. Does not implicitly {@link PublicMiniTickerV3Api.verify|verify} messages.
     * @param message PublicMiniTickerV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicMiniTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicMiniTickerV3Api message, length delimited. Does not implicitly {@link PublicMiniTickerV3Api.verify|verify} messages.
     * @param message PublicMiniTickerV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicMiniTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicMiniTickerV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicMiniTickerV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicMiniTickerV3Api;

    /**
     * Decodes a PublicMiniTickerV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicMiniTickerV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicMiniTickerV3Api;

    /**
     * Verifies a PublicMiniTickerV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicMiniTickerV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicMiniTickerV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicMiniTickerV3Api;

    /**
     * Creates a plain object from a PublicMiniTickerV3Api message. Also converts values to other types if specified.
     * @param message PublicMiniTickerV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicMiniTickerV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicMiniTickerV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicMiniTickerV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicSpotKlineV3Api. */
export interface IPublicSpotKlineV3Api {

    /** PublicSpotKlineV3Api interval */
    interval?: (string|null);

    /** PublicSpotKlineV3Api windowStart */
    windowStart?: (number|Long|null);

    /** PublicSpotKlineV3Api openingPrice */
    openingPrice?: (string|null);

    /** PublicSpotKlineV3Api closingPrice */
    closingPrice?: (string|null);

    /** PublicSpotKlineV3Api highestPrice */
    highestPrice?: (string|null);

    /** PublicSpotKlineV3Api lowestPrice */
    lowestPrice?: (string|null);

    /** PublicSpotKlineV3Api volume */
    volume?: (string|null);

    /** PublicSpotKlineV3Api amount */
    amount?: (string|null);

    /** PublicSpotKlineV3Api windowEnd */
    windowEnd?: (number|Long|null);
}

/** Represents a PublicSpotKlineV3Api. */
export class PublicSpotKlineV3Api implements IPublicSpotKlineV3Api {

    /**
     * Constructs a new PublicSpotKlineV3Api.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicSpotKlineV3Api);

    /** PublicSpotKlineV3Api interval. */
    public interval: string;

    /** PublicSpotKlineV3Api windowStart. */
    public windowStart: (number|Long);

    /** PublicSpotKlineV3Api openingPrice. */
    public openingPrice: string;

    /** PublicSpotKlineV3Api closingPrice. */
    public closingPrice: string;

    /** PublicSpotKlineV3Api highestPrice. */
    public highestPrice: string;

    /** PublicSpotKlineV3Api lowestPrice. */
    public lowestPrice: string;

    /** PublicSpotKlineV3Api volume. */
    public volume: string;

    /** PublicSpotKlineV3Api amount. */
    public amount: string;

    /** PublicSpotKlineV3Api windowEnd. */
    public windowEnd: (number|Long);

    /**
     * Creates a new PublicSpotKlineV3Api instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicSpotKlineV3Api instance
     */
    public static create(properties?: IPublicSpotKlineV3Api): PublicSpotKlineV3Api;

    /**
     * Encodes the specified PublicSpotKlineV3Api message. Does not implicitly {@link PublicSpotKlineV3Api.verify|verify} messages.
     * @param message PublicSpotKlineV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicSpotKlineV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicSpotKlineV3Api message, length delimited. Does not implicitly {@link PublicSpotKlineV3Api.verify|verify} messages.
     * @param message PublicSpotKlineV3Api message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicSpotKlineV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicSpotKlineV3Api message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicSpotKlineV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicSpotKlineV3Api;

    /**
     * Decodes a PublicSpotKlineV3Api message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicSpotKlineV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicSpotKlineV3Api;

    /**
     * Verifies a PublicSpotKlineV3Api message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicSpotKlineV3Api message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicSpotKlineV3Api
     */
    public static fromObject(object: { [k: string]: any }): PublicSpotKlineV3Api;

    /**
     * Creates a plain object from a PublicSpotKlineV3Api message. Also converts values to other types if specified.
     * @param message PublicSpotKlineV3Api
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicSpotKlineV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicSpotKlineV3Api to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublicSpotKlineV3Api
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PushDataV3ApiWrapper. */
export interface IPushDataV3ApiWrapper {

    /** 频道 */
    channel?: (string|null);

    /** PushDataV3ApiWrapper publicDeals */
    publicDeals?: (IPublicDealsV3Api|null);

    /** PushDataV3ApiWrapper publicIncreaseDepths */
    publicIncreaseDepths?: (IPublicIncreaseDepthsV3Api|null);

    /** PushDataV3ApiWrapper publicLimitDepths */
    publicLimitDepths?: (IPublicLimitDepthsV3Api|null);

    /** PushDataV3ApiWrapper privateOrders */
    privateOrders?: (IPrivateOrdersV3Api|null);

    /** PushDataV3ApiWrapper publicBookTicker */
    publicBookTicker?: (IPublicBookTickerV3Api|null);

    /** PushDataV3ApiWrapper privateDeals */
    privateDeals?: (IPrivateDealsV3Api|null);

    /** PushDataV3ApiWrapper privateAccount */
    privateAccount?: (IPrivateAccountV3Api|null);

    /** PushDataV3ApiWrapper publicSpotKline */
    publicSpotKline?: (IPublicSpotKlineV3Api|null);

    /** PushDataV3ApiWrapper publicMiniTicker */
    publicMiniTicker?: (IPublicMiniTickerV3Api|null);

    /** PushDataV3ApiWrapper publicMiniTickers */
    publicMiniTickers?: (IPublicMiniTickersV3Api|null);

    /** PushDataV3ApiWrapper publicBookTickerBatch */
    publicBookTickerBatch?: (IPublicBookTickerBatchV3Api|null);

    /** PushDataV3ApiWrapper publicIncreaseDepthsBatch */
    publicIncreaseDepthsBatch?: (IPublicIncreaseDepthsBatchV3Api|null);

    /** PushDataV3ApiWrapper publicAggreDepths */
    publicAggreDepths?: (IPublicAggreDepthsV3Api|null);

    /** PushDataV3ApiWrapper publicAggreDeals */
    publicAggreDeals?: (IPublicAggreDealsV3Api|null);

    /** PushDataV3ApiWrapper publicAggreBookTicker */
    publicAggreBookTicker?: (IPublicAggreBookTickerV3Api|null);

    /** 交易对 */
    symbol?: (string|null);

    /** 交易对ID */
    symbolId?: (string|null);

    /** 消息生成时间 */
    createTime?: (number|Long|null);

    /** 消息推送时间 */
    sendTime?: (number|Long|null);
}

/** Represents a PushDataV3ApiWrapper. */
export class PushDataV3ApiWrapper implements IPushDataV3ApiWrapper {

    /**
     * Constructs a new PushDataV3ApiWrapper.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPushDataV3ApiWrapper);

    /** 频道 */
    public channel: string;

    /** PushDataV3ApiWrapper publicDeals. */
    public publicDeals?: (IPublicDealsV3Api|null);

    /** PushDataV3ApiWrapper publicIncreaseDepths. */
    public publicIncreaseDepths?: (IPublicIncreaseDepthsV3Api|null);

    /** PushDataV3ApiWrapper publicLimitDepths. */
    public publicLimitDepths?: (IPublicLimitDepthsV3Api|null);

    /** PushDataV3ApiWrapper privateOrders. */
    public privateOrders?: (IPrivateOrdersV3Api|null);

    /** PushDataV3ApiWrapper publicBookTicker. */
    public publicBookTicker?: (IPublicBookTickerV3Api|null);

    /** PushDataV3ApiWrapper privateDeals. */
    public privateDeals?: (IPrivateDealsV3Api|null);

    /** PushDataV3ApiWrapper privateAccount. */
    public privateAccount?: (IPrivateAccountV3Api|null);

    /** PushDataV3ApiWrapper publicSpotKline. */
    public publicSpotKline?: (IPublicSpotKlineV3Api|null);

    /** PushDataV3ApiWrapper publicMiniTicker. */
    public publicMiniTicker?: (IPublicMiniTickerV3Api|null);

    /** PushDataV3ApiWrapper publicMiniTickers. */
    public publicMiniTickers?: (IPublicMiniTickersV3Api|null);

    /** PushDataV3ApiWrapper publicBookTickerBatch. */
    public publicBookTickerBatch?: (IPublicBookTickerBatchV3Api|null);

    /** PushDataV3ApiWrapper publicIncreaseDepthsBatch. */
    public publicIncreaseDepthsBatch?: (IPublicIncreaseDepthsBatchV3Api|null);

    /** PushDataV3ApiWrapper publicAggreDepths. */
    public publicAggreDepths?: (IPublicAggreDepthsV3Api|null);

    /** PushDataV3ApiWrapper publicAggreDeals. */
    public publicAggreDeals?: (IPublicAggreDealsV3Api|null);

    /** PushDataV3ApiWrapper publicAggreBookTicker. */
    public publicAggreBookTicker?: (IPublicAggreBookTickerV3Api|null);

    /** 交易对 */
    public symbol?: (string|null);

    /** 交易对ID */
    public symbolId?: (string|null);

    /** 消息生成时间 */
    public createTime?: (number|Long|null);

    /** 消息推送时间 */
    public sendTime?: (number|Long|null);

    /** 数据，NOTE：因为不能重复，所以类型和变量名尽量使用全名 */
    public body?: ("publicDeals"|"publicIncreaseDepths"|"publicLimitDepths"|"privateOrders"|"publicBookTicker"|"privateDeals"|"privateAccount"|"publicSpotKline"|"publicMiniTicker"|"publicMiniTickers"|"publicBookTickerBatch"|"publicIncreaseDepthsBatch"|"publicAggreDepths"|"publicAggreDeals"|"publicAggreBookTicker");

    /**
     * Creates a new PushDataV3ApiWrapper instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushDataV3ApiWrapper instance
     */
    public static create(properties?: IPushDataV3ApiWrapper): PushDataV3ApiWrapper;

    /**
     * Encodes the specified PushDataV3ApiWrapper message. Does not implicitly {@link PushDataV3ApiWrapper.verify|verify} messages.
     * @param message PushDataV3ApiWrapper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPushDataV3ApiWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PushDataV3ApiWrapper message, length delimited. Does not implicitly {@link PushDataV3ApiWrapper.verify|verify} messages.
     * @param message PushDataV3ApiWrapper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPushDataV3ApiWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushDataV3ApiWrapper message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PushDataV3ApiWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PushDataV3ApiWrapper;

    /**
     * Decodes a PushDataV3ApiWrapper message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PushDataV3ApiWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PushDataV3ApiWrapper;

    /**
     * Verifies a PushDataV3ApiWrapper message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PushDataV3ApiWrapper message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PushDataV3ApiWrapper
     */
    public static fromObject(object: { [k: string]: any }): PushDataV3ApiWrapper;

    /**
     * Creates a plain object from a PushDataV3ApiWrapper message. Also converts values to other types if specified.
     * @param message PushDataV3ApiWrapper
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PushDataV3ApiWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PushDataV3ApiWrapper to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PushDataV3ApiWrapper
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
