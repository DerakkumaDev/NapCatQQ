import { ActionName } from '@/onebot/action/router';
import { GetPacketStatusDepends } from '@/onebot/action/packet/GetPacketStatus';
import { AIVoiceChatType } from '@/core/packet/entities/aiChat';
import { Static, Type } from '@sinclair/typebox';

const SchemaData = Type.Object({
    character: Type.String(),
    group_id: Type.Union([Type.Number(), Type.String()]),
    text: Type.String(),
});

type Payload = Static<typeof SchemaData>;


export class SendGroupAiRecord extends GetPacketStatusDepends<Payload, {
    message_id: number
}> {
    override actionName = ActionName.SendGroupAiRecord;
    override payloadSchema = SchemaData;

    async _handle(payload: Payload) {
        await this.core.apis.PacketApi.pkt.operation.GetAiVoice(+payload.group_id, payload.character, payload.text, AIVoiceChatType.Sound);
        return {
            message_id: 0  // can't get message_id from GetAiVoice
        };
    }
}
