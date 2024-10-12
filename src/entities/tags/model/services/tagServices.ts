import { mockapiInstance } from '@/shared/api/mockapiInstance';
import { GetTagsRequest, GetTagsResponse } from '../types/tagServices';

class tagService {
  private tagEndpoint = '/tags';

  async getTags(data: GetTagsRequest) {
    return mockapiInstance.get<GetTagsResponse>(this.tagEndpoint);
  }
}

export const tagServices = new tagService();
