import { mockapiInstance } from '@/shared/api/mockapiInstance';
//types
import { GetTagsResponse } from '../types/tagServices';

class tagService {
  private tagEndpoint = '/tags';

  async getTags() {
    return mockapiInstance.get<GetTagsResponse>(this.tagEndpoint);
  }
}

export const tagServices = new tagService();
